let inventario = [];

//funcion para menu
function mostrarMenu(){
    return parseInt(prompt(
        "opciones disponibles \n"+
        "1. Agregar producto \n"+
        "2. Mostrar producto \n"+
        "3. Buscar producto por nombre \n"+
        "4. Salir"+
        "Ingrese una opcion: "
    ));
}


function agregarProducto(){
    let nombre = prompt("ingrese el nombre del producto");
    let precio = parseInt(prompt("introduce el precio de producto"))
    let cantidad = parseInt(prompt("ingrese la cantidad del producto"));

    if(cantidad > 0 && cantidad < 0){ 
    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
    };
    inventario.push(producto);
    alert("producto agregado");
    }else {
        alert("la cantidad y precio deben ser positivos")
    }
}
console.log(inventario);


function iniciar_programa(){
    let continuar = true;
    while (continuar){
        let opcion = mostrarMenu();
        switch (opcion){
            case 1:
                agregarProducto();
                break;
                case 2:
                mostrarProducto();
                break;
                case 3:
                buscarProducto();
                break;
                case 4:
                alert("saliendo del programa...");
                continuar = false;
                break;
                default:
                alert("opcion no valida");

        }
    }
    alert("progama finalizado");
}


function mostrarProducto(){
        if(inventario.length === 0){
            alert("no hay productos en el inventario");
                alert("no hay productos en el inventario");

        }else{
            let mensaje = "productos en el inventario: \n";
        }
        for(let i=0; i < inventario.length; i++){
            mensaje += `Producto ${i+1}`+
            `Nombre: ${inventario[i].nombre}`+
            `Nombre: ${inventario[i].precio}`+
            `Nombre: ${inventario[i].cantidad}`+  
            "............................ \n"
            ;

    }
    alert(mensaje);
}

//tarea
function buscarProducto(){
    let nombre = prompt("ingrese el nombre del producto a buscar");
    let encontrado = false;
    for(let i=0; i < inventario.length; i++){
        if(inventario[i].nombre === nombre){
            alert(`producto encontrado: ${inventario[i].nombre}`);
            encontrado = true;
            break;
        }
    }
    if(!encontrado){
        alert("producto no encontrado");
    }
}
    