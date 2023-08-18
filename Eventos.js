document.addEventListener("DOMContentLoaded", function() {
    var div = document.getElementById("miDiv");

    div.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            Btn();
        } else if (event.target.tagName === "DIV") {
            mostrarAlertaDiv();
        }
    });
});

function Btn() {
    Swal.fire({
        title: 'Saludos!',
        text: '👋👋👋',
        icon: 'info',
        confirmButtonText: 'Ok'
    });
}

function mostrarAlertaDiv() {
    Swal.fire({
        title: '¡Hola!',
        text: 'Soy el div :)',
        icon: 'info',
        confirmButtonText: 'Ok'
    });
}