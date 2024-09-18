
    // Cuando el modal se cierra, detiene el video
    var modalVLAN = document.getElementById('modaDispositivos');
    modalVLAN.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('videoDispositivos');
        iframe.src = iframe.src;  // Reinicia el iframe al cerrar el modal, deteniendo el video
    });
    var modalVLAN = document.getElementById('modalConexioness');
    modalVLAN.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('videoconexiones');
        iframe.src = iframe.src;  
    });
