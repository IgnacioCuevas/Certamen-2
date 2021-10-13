define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    console.log("A");
                }
                else {
                    event.preventDefault();
                    event.stopPropagation();
                    console.log("B");
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    var region = document.getElementById("region");
    region.addEventListener("change", actualizarComunas);
    var comuna = document.getElementById("comuna");
    function actualizarComunas() {
        while (comuna.firstChild) {
            comuna.removeChild(comuna.firstChild);
        }
        ;
        switch (region.value) {
            case "0": // vacio
                var opcion_1 = document.createElement("option");
                opcion_1.innerHTML = 'seleciona una comuna';
                comuna.appendChild(opcion_1);
                break;
            case "1": // Valparaiso
                var valparaiso = document.createElement("option");
                valparaiso.innerHTML = 'Valparaíso';
                comuna.appendChild(valparaiso);
                var vina = document.createElement("option");
                vina.innerHTML = 'Viña del Mar';
                comuna.appendChild(vina);
                var quillota = document.createElement("option");
                quillota.innerHTML = 'Quillota';
                comuna.appendChild(quillota);
                break;
            case "2": { // Antofagasta
                var calama = document.createElement("option");
                calama.innerHTML = 'Calama';
                comuna.appendChild(calama);
                var antofagasta = document.createElement("option");
                antofagasta.innerHTML = 'Antofagasta';
                comuna.appendChild(antofagasta);
                var mejillones = document.createElement("option");
                mejillones.innerHTML = 'Mejillones';
                comuna.appendChild(mejillones);
                break;
            }
        }
    }
    var editar = document.getElementById("editar");
    editar.addEventListener("click", editarDatos);
    function editarDatos(event) {
        var targetDiv = document.getElementById("antecedentes");
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
        }
        else {
            targetDiv.style.display = "block";
        }
    }
});
