document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const estado = document.getElementById("estado");
    const estadoSeleccionado = document.getElementById("estadoSeleccionado");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedState = estado.options[estado.selectedIndex].value;
       
        estadoSeleccionado.textContent = selectedState; // Muestra el estado seleccionado
        alert("Tarea enviada");
        
    });
});
