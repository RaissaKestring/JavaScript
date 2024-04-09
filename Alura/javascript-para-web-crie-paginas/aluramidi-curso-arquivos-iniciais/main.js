function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {
  ListaDeTeclas[contador].onclick = function() {
    tocaSom('#som_tecla_pom');
  }
  
  contador = contador + 1;
 
  console.log(contador);
}