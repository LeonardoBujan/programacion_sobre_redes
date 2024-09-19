document.addEventListener('DOMContentLoaded', function () {
    var modalDispositivos = document.getElementById('modaDispositivos');
    if (modalDispositivos) {
        modalDispositivos.addEventListener('hidden.bs.modal', function () {
            var iframe = document.getElementById('videoDispositivos');
            if (iframe) {
                iframe.src = iframe.src;  // Reinicia el iframe al cerrar el modal, deteniendo el video
            }
        });
    }

    var modalConexiones = document.getElementById('modalConexioness');
    if (modalConexiones) {
        modalConexiones.addEventListener('hidden.bs.modal', function () {
            var iframe = document.getElementById('videoconexiones');
            if (iframe) {
                iframe.src = iframe.src;  
            }
        });
    }

    var modalSpannig = document.getElementById('modalSpannig');
    if (modalSpannig) {
        modalSpannig.addEventListener('hidden.bs.modal', function () {
            var iframe = document.getElementById('videoSpanningtree');
            if (iframe) {
                iframe.src = iframe.src;  
            }
        });
    }

    var modalOspf = document.getElementById('modalOspf');
    if (modalOspf) {
        modalOspf.addEventListener('hidden.bs.modal', function () {
            var iframe = document.getElementById('videoOspf');
            if (iframe) {
                iframe.src = iframe.src;  
            }
        });
    }

    var modalArp = document.getElementById('modalArp');
    if (modalArp) {
        modalArp.addEventListener('hidden.bs.modal', function () {
            var iframe = document.getElementById('videoArp');
            if (iframe) {
                iframe.src = iframe.src;  
            }
        });
    }

    var modalCorreo = document.getElementById('modalCorreo');
    if (modalCorreo) {
        modalCorreo.addEventListener('hidden.bs.modal', function () {
            var iframe = document.getElementById('videoCorreo');
            if (iframe) {
                iframe.src = iframe.src;  
            }
        });
    }

    var modal8023 = document.getElementById('modal8023');
    if (modal8023) {
        modal8023.addEventListener('hidden.bs.modal', function () {
            var iframe = document.getElementById('video8023');
            if (iframe) {
                iframe.src = iframe.src;  
            }
        });
    }

    var modalOsi = document.getElementById('modalOsi');
    if (modalOsi) {
        modalOsi.addEventListener('hidden.bs.modal', function () {
            var iframe = document.getElementById('videoOsi');
            if (iframe) {
                iframe.src = iframe.src;  
            }
        });
    }
});
