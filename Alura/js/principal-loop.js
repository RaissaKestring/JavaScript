      const titulo = (document.querySelector('h1')); // query selector apenas seleciona um elemento
			console.log(titulo);
			// <h1>Aparecida Nutrição<h1>
			console.log(titulo.textContent);
			//Aparecida Nutrição
			titulo.textContent = 'Aparecida Nutricionista';
			// Muda o titulo 
			document.querySelector('.titulo');
			// é uma boa pratica mudar o nome do titulo, não pela tag 'h1', mas sim criando uma classe, caso eu queira passar de h1 para h2 no meu código, não dara problema e não terei que mudar tudo

      /* O problema de se buscar uma tag no DOM é que o código JavaScript fica muito atrelado ao HTML. Caso o desenvolvedor decida fazer alterações no HTML, o código deixará de funcionar. Por isso, é uma boa prática não buscarmos por uma tag HTML específica, e usar outras opções que a função querySelector() nos disponibiliza.
      */
      console.log('Fui carregado de um arquivo externo');

      const pacientes = document.querySelectorAll('.paciente'); // query selector apenas seleciona um elemento, queryselectorall seleciona todos
      console.log(pacientes);
      // criei um id em html chamado primeiro paciente, pois todos os pacientes possui classe 'paciente', pra chamar o id, uso #

      for(let i = 0; i < pacientes.length; i++) {
          const paciente = pacientes[i];
          const tdPeso = paciente.querySelector('.info-peso');
          const peso = tdPeso.textContent;
          const tdAltura = paciente.querySelector('.info-altura');
          const altura = tdAltura.textContent;

          /*console.log(paciente); // tr
          console.log(tdAltura); // td que tem o peso
          console.log(altura); // obter 100 */

          const tdImc = paciente.querySelector('.info-imc');

          /*if (peso < 0) {
            console.log('Peso inválido');
          } 
          
          if (peso > 1000) {
            console.log('Peso inválido')
          } 
          
          ao inves disso, uso || */

          let pesoEValido  = true; // estava dando erro na linha 50, porque eu esqueci de mudar as variaveis, de const para let
          let alturaEValida = true;

          if (peso <= 0 || peso >= 1000) {
            console.log('Peso inválido');
            pesoEValido = false;
            tdPeso.textContent = 'Peso inválido';
            paciente.classList.add('paciente-invalido');
            // paciente.style.color = 'red'; muda a cor da fonte
          }

          if (altura <= 0 || altura >= 3.00) {
            console.log('Altura inválida');
            alturaEValida = false;
            tdAltura.textContent = 'Altura inválida';
            paciente.classList.add('paciente-invalido');
            //paciente.style.backgroundColor = 'lightcoral' ; muda o background
          }

          if (alturaEValida && pesoEValido) {
            const imc = peso / (altura * altura); // 100 / 2.0 * 2.0 -> 25
            tdImc.textContent = imc.toFixed(2) // alterando o valor que contem na variavel
          }
          }

          /* titulo.addEventListener('click', function (){
            console.log('posso chamar uma função anônima')
          });


          function mostraMensagem () {
            console.log('Olá, eu fui clicado!');
          } */

          const botaoAdicionar = document.querySelector('#adicionar-paciente');
          console.log(botaoAdicionar);
          botaoAdicionar.addEventListener('click', function(){
            console.log('Oi, cliquei no botao');
          });