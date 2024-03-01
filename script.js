let menuVisible = false;
// FUNCION PARA OCULTAR MENU
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "adaptativo";
        menuVisible = true;
    }
}

function seleccionar() {
    //FUNCION PARA OCULTAR EL MENU UNA VEZ SELECCIONADO
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
