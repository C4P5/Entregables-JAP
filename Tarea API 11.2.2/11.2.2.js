document.addEventListener('DOMContentLoaded', function () {
    let send = () => {
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('Apellido').value;
        let fechaNacimiento = document.getElementById('fechaNacimiento').value;

        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ nombre, apellido, fechaNacimiento })
        })
            .then(response => {
                if (response.ok) {
                    console.log('Datos enviados con éxito');
                } else {
                    console.error('Error al enviar los datos');
                }
            })
            .catch(error => {
                console.error('Error al realizar la solicitud:', error);
            });
    };

    let limpar = () => {
        document.getElementById('nombre').value = '';
        document.getElementById('Apellido').value = '';
        document.getElementById('fechaNacimiento').value = '';
    };

    document.getElementById('send').addEventListener('click', send);
    document.getElementById('limpar').addEventListener('click', limpar);
});