
    // Cuando el modal se cierra, detiene el video
    var modalDispositivos = document.getElementById('modaDispositivos');
    Dispositivos.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('videoDispositivos');
        iframe.src = iframe.src;  // Reinicia el iframe al cerrar el modal, deteniendo el video
    });
    var modalConexiones = document.getElementById('modalConexioness');
    modalConexiones.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('videoconexiones');
        iframe.src = iframe.src;  
    });

    var modalSpannig = document.getElementById('modalSpannig');
    modalSpannig.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('videoSpanningtree');
        iframe.src = iframe.src;  
    });

    var modalOspf = document.getElementById('modalOspf');
    modalOspf.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('videoOspf');
        iframe.src = iframe.src;  
    });

    var modalArp = document.getElementById('modalArp');
    modalArp.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('videoArp');
        iframe.src = iframe.src;  
    });

    var modalCorreo = document.getElementById('modalCorreo');
    modalArp.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('videoCorreo');
        iframe.src = iframe.src;  
    });

    var modal8023 = document.getElementById('modal8023');
    modal8023.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('video8023');
        iframe.src = iframe.src;  
    });

    var modalOsi = document.getElementById('modalOsi');
    modalOsi.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('videoOsi');
        iframe.src = iframe.src;  
    });