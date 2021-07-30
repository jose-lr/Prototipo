(function(){
    "use strict";



    document.addEventListener('DOMContentLoaded', function(){
        var map = L.map('mapa').setView([19.474346, -99.045836], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([19.474346, -99.045836]).addTo(map)
        .bindPopup('ICO FES Aragón')
        .openPopup()
        .bindTooltip('¡Orgullosamente UNAM!')
        .openTooltip();

        // Campos datos_usuario
        var nombre = document.getElementById('nombre');
        var paterno = document.getElementById('ap_paterno');
        var materno = document.getElementById('ap_materno');
        var email = document.getElementById('email');
        var telefono = document.getElementById('telefono');                

        //Botones y divs 
        var errorDiv = document.getElementById('error');
        
        // Validación de campos
        nombre.addEventListener('blur', validarCampos);
        paterno.addEventListener('blur', validarCampos);
        materno.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);  
        telefono.addEventListener('blur', validarCampos);      

        function validarCampos() {
            if(this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "*Este campo es obligatorio";
                this.style.border = '2px solid #1d5a4f';
                errorDiv.style.border = '1px solid #1d5a4f';
            } else {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        } 
        
        // Validar email
        email.addEventListener('blur', validarEmail)

        function validarEmail() {
            if(this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = "Correo no valido. Intentalo de nuevo";
                this.style.border = '2px solid #1d5a4f';
                errorDiv.style.border = '1px solid #1d5a4f';
            }
        }

    }); // DOM CONTENT LOADED
})();