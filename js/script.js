// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('¡Proyecto cargado exitosamente!');

    const btnAccion = document.getElementById('btn-accion');

    if (btnAccion) {
        btnAccion.addEventListener('click', () => {
            alert('¡El script de JavaScript funciona perfectamente!');
        });
    }
});