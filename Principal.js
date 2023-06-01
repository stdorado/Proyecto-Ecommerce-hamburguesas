//PARTE DE LOS PRODUCTOS A PINTAR Y DEL JSON

// JSON de Las Hamburguesas
let productos = `[
  {
    "nombre": "ParoCardiaco",
    "imagen": "./image/Burguer-2.png",
    "precio": 2200,
    "ingredientes": "Medallón de Carne, Lechuga, Tomate, Triple Cheddar y Huevo"
  },
  {
    "nombre": "Titan",
    "imagen": "./image/Burguer-2.png",
    "precio": 2600,
    "ingredientes": "Medallón de Carne, Lechuga, Tomate, Triple Cheddar y Huevo"
  },
  {
    "nombre": "MacDorado",
    "imagen": "./image/Burguer-2.png",
    "precio": 2800,
    "ingredientes": "Medallón de Carne, Lechuga, Tomate, Triple Cheddar y Huevo"
  },
  {
    "nombre": "UltimoVuelo",
    "imagen": "./image/Burguer-2.png",
    "precio": 3000,
    "ingredientes": "Medallón de Carne, Lechuga, Tomate, Triple Cheddar y Huevo"
  },
  {
    "nombre": "MacNifica",
    "imagen": "./image/Burguer-2.png",
    "precio": 3000,
    "ingredientes": "Medallón de Carne, Lechuga, Tomate, Triple Cheddar y Huevo"
  },
  {
    "nombre": "TurboCheddar",
    "imagen": "./image/Burguer-2.png",
    "precio": 3000,
    "ingredientes": "Medallón de Carne, Lechuga, Tomate, Triple Cheddar y Huevo"
  }
]`;

let pasarProductos = JSON.parse(productos);

//Selecciona la clase "Container" del HTML
let container = document.getElementsByClassName('container')[0];

let row;
let rowSize = 2; // Número de productos por fila

pasarProductos.forEach(function(producto, index) {
  if (index % rowSize === 0) {
    row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
  }
  //Aca arrancaria a crear Los productos y pintarlos en el html
  let card = document.createElement('div');
  card.className = 'card-body';
  //Creamos el nombre a la tarjeta
  let nombre = document.createElement('h3');
  nombre.className = 'card-title';
  nombre.textContent = producto.nombre;
  card.appendChild(nombre);
  //Creamos la imagen
  let imagen = document.createElement('img');
  imagen.className = 'card-img';
  imagen.src = producto.imagen;
  card.appendChild(imagen);
  //Creamos La parte de los ingredientes
  let ingredientes = document.createElement('div');
  ingredientes.className = 'card-text Descripcion';
  ingredientes.textContent = producto.ingredientes;
  card.appendChild(ingredientes);
  //Creamos el Precio
  let precio = document.createElement('div');
  precio.className = 'card-text';
  precio.textContent = '$' + producto.precio;
  card.appendChild(precio);
  //Creamos el Boton de comprar
  let botonCompra = document.createElement('button');
  botonCompra.className = 'btn';
  botonCompra.textContent = 'Comprar';
  card.appendChild(botonCompra);
  //Agrega card al Html
  row.appendChild(card);

  //Darle Funcionalidad a los botones
  botonCompra.addEventListener('click', function() {
    AgregarAlCarro(producto);
    console.log('Compraste el producto:', producto.nombre);
  });
});

//-------------------------------------------PARTE DEL CARRITO -------------------------------------------------------------------------------------------

// Array para almacenar los productos en el carrito
let productosDelCarrito = [];

// Obtener elementos del DOM
let listaPedidos = document.getElementById("lista-Pedidos");
let totalPedidos = document.getElementById("total-Pedidos");
let eliminarContenido = document.getElementById("Eliminar-Contenido");

// Función para agregar un producto al carrito
function AgregarAlCarro(producto) {
  productosDelCarrito.push(producto);
  actualizarLocalStorage();
  mostrarCarrito();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
  productosDelCarrito.splice(index, 1);
  actualizarLocalStorage();
  mostrarCarrito();
}

// Función para mostrar el carrito 
function mostrarCarrito() {
  listaPedidos.innerHTML = "";
  let total = 0;

  for (let i = 0; i < productosDelCarrito.length; i++) {
    let item = productosDelCarrito[i];
    
    // Crear Lista donde se listen el producto comprado con su precio
    let listaItem = document.createElement("li");
    listaItem.className = "List-Style"
    listaItem.textContent = item.nombre + " - $" + item.precio;
    
    // Crear Boton de Eliminar
    let removerboton = document.createElement("button");
    removerboton.className = "Delete"
    removerboton.textContent = "Desechar";
    removerboton.addEventListener("click", function(index) {
      return function() {
        removeFromCart(index);
      };
    }(i));

    // Se agregan la lista creada y el Boton de eliminar
    listaItem.appendChild(removerboton);
    listaPedidos.appendChild(listaItem);

    total += item.precio;
  }
  
  // Se muestra el total de los productos cargados
  totalPedidos.textContent = "El total de productos es: $" + total;
}

// Función para actualizar el localStorage
function actualizarLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(productosDelCarrito));
}

// Función para cargar los productos del localStorage
function cargarLocalStorage() {
  const datosDelCarrito = localStorage.getItem("cartItems");
  if (datosDelCarrito) {
    productosDelCarrito = JSON.parse(datosDelCarrito);
    mostrarCarrito();
  }
}

// Event listener para vaciar el carrito
eliminarContenido.addEventListener("click", function() {
  productosDelCarrito = [];
  actualizarLocalStorage();
  mostrarCarrito();
});

// Cargar los productos del localStorage al cargar la página
window.addEventListener("load", cargarLocalStorage);
