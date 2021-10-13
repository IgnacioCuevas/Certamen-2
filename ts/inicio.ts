import jquery=require('jquery');

const $:JQueryStatic=jquery;



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            console.log("A")
          } else {
            event.preventDefault()
            event.stopPropagation()
            console.log("B")
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()






  





  let region:any=document.getElementById("region");
  region.addEventListener("change", actualizarComunas);
  let comuna:any=document.getElementById("comuna");
  function actualizarComunas():void {
      while (comuna.firstChild){comuna.removeChild(comuna.firstChild);};
      switch (region.value) {
          case "0":// vacio
              let opcion_1:any=document.createElement("option");
              opcion_1.innerHTML = 'seleciona una comuna';
              comuna.appendChild(opcion_1);
              break;
          case "1": // Valparaiso
              let valparaiso:any=document.createElement("option");   valparaiso.innerHTML = 'Valparaíso';  comuna.appendChild(valparaiso);
              let vina:any=document.createElement("option"); vina.innerHTML = 'Viña del Mar'; comuna.appendChild(vina);
              let quillota:any=document.createElement("option"); quillota.innerHTML = 'Quillota'; comuna.appendChild(quillota);              break;
          case "2":{ // Antofagasta
              let calama:any=document.createElement("option");   calama.innerHTML = 'Calama';  comuna.appendChild(calama);
              let antofagasta:any=document.createElement("option"); antofagasta.innerHTML = 'Antofagasta'; comuna.appendChild(antofagasta);
              let mejillones:any=document.createElement("option"); mejillones.innerHTML = 'Mejillones'; comuna.appendChild(mejillones);
              break;
          }
      }
  }



    let editar:any=document.getElementById("editar");

    editar.addEventListener("click",editarDatos);

    function editarDatos(event:any){
      let targetDiv:any=document.getElementById("antecedentes");
      if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
      } else {
        targetDiv.style.display = "block";
      }
      
  }

  

    


