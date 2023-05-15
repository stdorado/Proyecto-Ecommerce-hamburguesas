let bienvenido = alert("Bienvenido a la hamburgueseria de Don Mario!")
let usuarioNombre = prompt("Porfavor Ingrese su Nombre Completo")
alert("Bienvenido " + usuarioNombre)

let EdadIngresar = prompt("Ingrese Su Edad Porfavor")
if(EdadIngresar <= 17 ){
    alert("Usted es menor De Edad no puede ingresar")
}else{
    alert("Usted Cumple la Edad Permitida para Continuar")
}

//INGRESAR PRODUCTOS
class Hamburguesas{
    constructor(nombreHamburguesa,IngredientesHamburguesa,PrecioHamburguesa,StockHamburguesa){

        this.nombreHamburguesa = nombreHamburguesa
        this.IngredientesHamburguesa = IngredientesHamburguesa
        this.PrecioHamburguesa = PrecioHamburguesa
        this.StockHamburguesa  = StockHamburguesa
    }
}
//array vacio donde se cargaran las hamburguesas
let Burguer = []


//funcion agregarHamburguesas
function agregarHamburguesas() {
    let Continuar = true

    while (Continuar) {
        let nombreHamburguesa = prompt("Ingrese el nombre de la hamburguesa (o  'NO' para Salir):")
        if (nombreHamburguesa.toLowerCase() === "NO") {
            Continuar = false
        }
        let IngredientesHamburguesa = prompt("Ingrese los ingredientes de la Hamburguesa")
        let PrecioHamburguesa = parseFloat(prompt("Cuanto Vale la Hamburguesa?"))
        let StockHamburguesa = parseInt(prompt("Cuantas hamburguesas hay Disponibles?"))

        //aqui se va a subir la hamburguesa creada al Array Burguer
        let hamburguesa = new Hamburguesas(nombreHamburguesa,IngredientesHamburguesa,PrecioHamburguesa,StockHamburguesa)
        Burguer.push(hamburguesa)

        //aca se pregunta si se desea continuar agregando hamburguesas
        Continuar = confirm("¿Desea agregar más hamburguesas?")
    }
}
agregarHamburguesas();

// Aca se ven las hamburguesas ingresadas
let mensaje = "";

// Se recorre el array y se muestra el producto
for (let i = 0; i < Burguer.length; i++) {
  mensaje += `Nombre de la hamburguesa: ${Burguer[i].nombreHamburguesa}\n`;
  mensaje += `Ingredientes: ${Burguer[i].IngredientesHamburguesa}\n`;
  mensaje += `Precio: ${Burguer[i].PrecioHamburguesa}\n`;
  mensaje += `Stock: ${Burguer[i].StockHamburguesa}\n\n`;
}

// Alerta donde se muestran las hamburguesas ingresadas con un salto de linea
alert("Las hamburguesas ingresadas son:\n" + mensaje);



//Despedida de la tienda
let Chau = confirm("Sus Hamburguesas Fueron Cargadas con exito, si desea cargar mas recargue la pagina")