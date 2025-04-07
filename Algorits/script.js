document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('encuestaForm');
    const resultadoDiv = document.getElementById('resultado');
    const mensajeResultadoDiv = document.getElementById('mensajeResultado');
    const multaResultadoDiv = document.getElementById('multaResultado');
    const consejosAdicionalesDiv = document.getElementById('consejosAdicionales');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        let infracciones = [];

        // Validar respuestas y determinar infracciones
        if (document.querySelector('input[name="licencia"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No porta licencia de conducción vigente",
                multa: 8,
                articulo: "Art. 24 Ley 769 de 2002",
                justificacion: "Conducir sin la licencia requerida pone en riesgo la seguridad vial."
            });
        }
        if (document.querySelector('input[name="soat"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No tiene el SOAT al día",
                multa: 30,
                articulo: "Art. 42 Ley 769 de 2002",
                justificacion: "El SOAT es obligatorio para cubrir gastos médicos en caso de accidente."
            });
        }
        if (document.querySelector('input[name="casco"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No usa casco certificado",
                multa: 15,
                articulo: "Res. 23385 de 2020",
                justificacion: "El casco certificado es esencial para proteger la cabeza en caso de accidente."
            });
        }
        if (document.querySelector('input[name="chaleco"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No usa chaleco reflectivo",
                multa: 5,
                articulo: "Res. 1737 de 2004",
                justificacion: "El chaleco reflectivo aumenta la visibilidad del motociclista, especialmente de noche."
            });
        }
        if (document.querySelector('input[name="tecnomecanica"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No realiza revisión técnico-mecánica al día",
                multa: 3,
                articulo: "Art. 50 Ley 769 de 2002",
                justificacion: "La revisión técnico-mecánica garantiza el buen estado del vehículo."
            });
        }
        if (document.querySelector('input[name="semaforos"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No respeta los semáforos y señales de tránsito",
                multa: 10,
                articulo: "Art. 119 Ley 769 de 2002",
                justificacion: "Respetar las señales es fundamental para mantener el orden y evitar accidentes."
            });
        }
        if (document.querySelector('input[name="carril"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No circula por el carril permitido",
                multa: 4,
                articulo: "Art. 94 Ley 769 de 2002",
                justificacion: "Circular por el carril correcto ayuda a mantener el flujo del tráfico y evita maniobras peligrosas."
            });
        }
        if (document.querySelector('input[name="adelantar"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "Adelanta en zonas prohibidas",
                multa: 12,
                articulo: "Art. 75 Ley 769 de 2002",
                justificacion: "Adelantar en zonas prohibidas es una maniobra peligrosa que puede causar accidentes."
            });
        }
        if (document.querySelector('input[name="velocidad"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No respeta los límites de velocidad",
                multa: 15,
                articulo: "Art. 106 Ley 769 de 2002",
                justificacion: "Exceder los límites de velocidad reduce el tiempo de reacción y aumenta el riesgo de accidentes."
            });
        }
        if (document.querySelector('input[name="telefono"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "Usa el celular mientras conduce",
                multa: 20,
                articulo: "Art. 131 Ley 769 de 2002",
                justificacion: "Usar el teléfono móvil distrae al conductor y aumenta el riesgo de accidentes."
            });
        }
        if (document.querySelector('input[name="entorno"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No está atento al entorno y a otros usuarios de la vía",
                multa: 7,
                articulo: "Art. 56 Ley 769 de 2002",
                justificacion: "Estar atento al entorno es fundamental para anticipar y evitar situaciones peligrosas."
            });
        }
        if (document.querySelector('input[name="peatones"]:checked').value === 'no') {
            infracciones.push({
                descripcion: "No respeta a los peatones y ciclistas",
                multa: 13,
                articulo: "Art. 57 Ley 769 de 2002",
                justificacion: "Los peatones y ciclistas son usuarios vulnerables de la vía y merecen respeto."
            });
        }

        // Mostrar resultados
        resultadoDiv.classList.remove('oculto');
        consejosAdicionalesDiv.classList.remove('oculto');

        if (infracciones.length === 0) {
            mensajeResultadoDiv.innerHTML = "<i class='fas fa-check-circle'></i> Evaluación completada. Cumple con los estándares.";
            multaResultadoDiv.innerHTML = "";
        } else {
            let totalMulta = infracciones.reduce((acumulador, infraccion) => acumulador + infraccion.multa, 0);

            let listaInfracciones = "<ul>";
            infracciones.forEach(infraccion => {
                listaInfracciones += `<li>
                    <strong>${infraccion.descripcion}</strong>
                    (Multa: ${infraccion.multa} SMDLV)<br>
                    <em>${infraccion.articulo}</em> - ${infraccion.justificacion}
                </li>`;
            });
            listaInfracciones += "</ul>";

            mensajeResultadoDiv.innerHTML = "<i class='fas fa-exclamation-triangle'></i> Infracciones detectadas:";
            multaResultadoDiv.innerHTML = listaInfracciones + `<p>Total a pagar: <strong>${totalMulta} SMDLV</strong></p>`;
        }
    });
});