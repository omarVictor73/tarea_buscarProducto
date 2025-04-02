let tareas = [];

function mostrar_menu(){
   return parseInt(prompt(
        "opciones disponibles:\n "+
        "1. agregar tarea \n"+
        "2. ver todas las tareas \n"+
        "3. Marcar tarea como completada \n"+
        "4. Salir \n"+
        "elige una opcion: " 
    ));
}



function iniciar_programa(){
    let continuar = true;
    while(continuar){
    

    let opcion = mostrar_menu();
    switch (opcion){
        case 1:
            agregar_tarea();
            break;
        case 2:
            ver_tareas();
            break;
        case 3:
            marcar_tarea_completada();
            break;
        case 4:
            alert("salendo del programa");
            break;
        default:
            alert("opcion no valida, elige del 1 al 4");
            iniciar_programa();
            }
        }
    alert("programa terminado")
    }
function agregar_tarea(){
    let nombre = prompt("ingresa el nombre de la tarea");
    if(nombre){
        let tarea ={
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);

    }else(
        alert("nombre de tarea no puede estar vacio")
    )
}






//iniciar programa
function marcar_tarea_completada(){
    let numero = parseInt(prompt("introduce el numero de la tarea a marcar como completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completado=true;
        alert(`la tarea: "${tareas[numero - 1].nombre}"ha sido completada`);
    }else{
        alert("numero de tarea invalido");
        
        }
}


    

        