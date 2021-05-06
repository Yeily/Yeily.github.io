/* **************************
Autor: Yeily Calderón M.
Mail: yeilycalderon@yahoo.es
Country: Costa Rica
************************** */
'use strict';

var g_dirRelativa = window.DIR_RELATIVA;

document.oncontextmenu = function() {
   return false;
};

document.onmousedown = function(ctl) {
   var msg = "Si desea contenido de este sitio, por favor ponganse en contacto con su desarrollador.";
   
   if (ctl.button == 2) {
      alert(msg);
      return false;
   }
   
   return true;
};

////////////////////////////////////////////////////////////
