function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if(elemento != null && elemento.localName === 'audio') {
        elemento.play();
  }
  else {
     //alert('Elemento nao encontrado');
    console.log('Elemento nao encontrado ou seletor invalido');
  }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < ListaDeTeclas.length; contador ++) { //for permite criação de variavel e condicao

  const tecla = ListaDeTeclas[contador];
  const instrumento = tecla.classList[1];// template string
  const idAudio = `#som_${instrumento}`;
  // console.log(idAudio);

  tecla.onclick = function() {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Space' || evento.code === 'Enter') { // inves de criar varios if, uso || (ou)
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function() {
    tecla.classList.remove('ativa');
  }
}  
  /*
  contador = contador + 1;
  mesma coisa que: 
  contador ++
  */
 
  //console.log(contador);


/* 
se fosse feito com while
while (contador < ListaDeTeclas.length) {

  const tecla = ListaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  // template string
  const idAudio = `#som_${instrumento}`;
  // console.log(idAudio);

  tecla.onclick = function() {
    tocaSom(idAudio);
  }
  
  contador = contador + 1;
 
  //console.log(contador);
  
}
*/
