function menu(){
  let dato = document.querySelector("#btn_menu");
  let nav = document.querySelector(".navbar");
  if (dato.value == "1") {
    nav.setAttribute("id", "mostrar_menu");
    dato.value="2";
  }else{
    nav.removeAttribute("id");
    dato.value="1";
  }
}
function paginar(valor){
  let opt = pos_actual + valor;
  if (opt > max_pagina || opt < 1) {
    opt = 1; 
  }
  ejecutar_pagina(opt);
}
function ejecutar_pagina(opt){
  pos_actual =opt;
  llamar_pagina(opt);
}
function inicio(){


  ejecutar_pagina(1);
}
window.onload = inicio();
