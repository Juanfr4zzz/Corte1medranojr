document.addEventListener('DOMContentLoaded', function() {
    const edadInput = document.getElementById('edad');
    const verificarBtn = document.getElementById('verificar');
    const resultadoDiv = document.getElementById('resultado');
    const mensajeResultado = document.getElementById('mensaje-resultado');
    const edadErrorSpan = document.getElementById('edad-error');
    const glitchText = document.querySelector('.glitch'); // Selecciona el texto con glitch

    verificarBtn.addEventListener('click', function() {
        const edad = parseInt(edadInput.value); // Convertir a número entero

        // Validación de la entrada
        if (isNaN(edad)) {
            edadErrorSpan.textContent = 'Error: Dato inválido. Ingrese un número entero.';
            resultadoDiv.classList.add('hidden'); // Ocultar el resultado
            return;
        }

        if (edad < 0) {
            edadErrorSpan.textContent = 'Error: Valor no permitido. La edad debe ser un número positivo. Intente de nuevo.';
            resultadoDiv.classList.add('hidden');
            return;
        }

        if (edad > 150) {
            edadErrorSpan.textContent = 'Error: Rango excedido. Por favor, introduzca una edad realista.';
            resultadoDiv.classList.add('hidden');
            return;
        }

        edadErrorSpan.textContent = ''; // Limpiar mensaje de error

        // Determinar si es mayor o menor de edad
        let mensaje = '';
        if (edad >= 18) {
            mensaje = "Acceso permitido. El usuario es mayor de edad.";
        } else {
            mensaje = "Acceso denegado. El usuario es menor de edad.";
        }

        // Mostrar el resultado
        mensajeResultado.textContent = mensaje;
        resultadoDiv.classList.remove('hidden');
    });

    // Opcional: Activar el glitch en el texto al hacer clic en el botón (ejemplo)
    verificarBtn.addEventListener('click', function() {
        glitchText.classList.add('glitch-active'); // Agrega una clase para activar el efecto
        setTimeout(function() {
            glitchText.classList.remove('glitch-active'); // Quita la clase después de un tiempo
        }, 1000); // Duración del glitch (1 segundo)
    });

    // Opcional: Limpiar el mensaje de error cuando el usuario escribe
    edadInput.addEventListener('input', function() {
        edadErrorSpan.textContent = '';
        resultadoDiv.classList.add('hidden'); // Ocultar el resultado al cambiar la edad
    });
});