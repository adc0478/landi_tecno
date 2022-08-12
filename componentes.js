
function pagina1(){
  let salida1 = ` <div class="contenido">
                <h1>Create your app page with <strong>App</strong>speria</h1>
                <p> A better way to present your app using fully featured appsperia template.Now available on the App Store and Play Store!</p>
                <a href="#" target="_blank" class="btn_big"><img src="img/redes/download-solid.svg" alt=""> Download app</a>
              </div>`;
  let salida2 = ` <img class="contenido2" src="img/land/bg.jpg" alt=""/>`;
  document.querySelector('.display').innerHTML = salida2;
  document.querySelector(".info").innerHTML = salida1;
}
async function pagina2(){
  let salida1 = ` <div class="contenido">
                     <h1>Ingresar su consulta</h1>
                    <form action="" method="post" accept-charset="utf-8">
                    <div> 
                      <label><input type="text" name="nombre" value="" id="" class="input" placeholder="Nombre"></label> 
                      <label><input type="text" name="apellido" value="" class="input" id="apellido" placeholder="Apellido"></label> 
                      <label><input type="email" name="email" value="" class="input" id="email" placeholder="Email"></label>
                    </div> 
                    <textarea name="comentario" id="" placeholder="Ingrese aqui su comentario"></textarea>
                    <input type="submit" class="btn_small" value="Enviar"/>
                  </form>
              </div>`;
  let salida2 = `<div class="contenido2"> <img src="img/land/form.jpg" alt="contacto"/></div>`;
  document.querySelector('.display').innerHTML = salida2;
  document.querySelector(".info").innerHTML = salida1;
}
function pagina3(){
  alert ('pagina3');
}

function llamar_pagina(opt){
  document.querySelector('.contenido').setAttribute("id", "contenido_salida");
  document.querySelector('.contenido2').setAttribute("id", "contenido_salida");
 

  setTimeout(function(){
  document.querySelector('.contenido').remove();
  document.querySelector('.contenido2').remove();


  switch(opt){
    case 1:
      pagina1();
      break;
    case 2:
      pagina2();
      break;
    case 3:
      pagina3();
      break;
  }
  },10);
}
