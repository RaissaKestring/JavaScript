// atividade 1) Incrementando o contador no console

let contador = 0;

function incrementarContador() {
  contador = contador + 1;
  console.log('Contador: ' + contador);
}

const botao = document.querySelector('.botao');
botao.onclick = incrementarContador;