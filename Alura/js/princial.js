      const titulo = (document.querySelector('h1'));
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

      const paciente = document.querySelector('#primeiro-paciente')
      // criei um id em html chamado primeiro paciente, pois todos os pacientes possui classe 'paciente', pra chamar o id, uso #
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
      }

      if (altura <= 0 || altura >= 3.00) {
        console.log('Altura inválida');
        alturaEValida = false;
        tdAltura.textContent = 'Altura inválida';
      }

      if (alturaEValida && pesoEValido) {
        const imc = peso / (altura * altura); // 100 / 2.0 * 2.0 -> 25
        tdImc.textContent = imc; // alterando o valor que contem na variavel
      }

      const paciente2 = document.querySelector('#segundo-paciente');
      const tdPeso2 = paciente2.querySelector('.info-peso'); //tinha colocado document.queryselector
      const peso2 = tdPeso2.textContent;
      const tdAltura2 = paciente2.querySelector('.info-altura');
      const altura2 = tdAltura2.textContent;
      const tdImc2 = paciente2.querySelector('.info-imc');

      let pesoEValido2 = true;
      let alturaEValida2 = true;

      if (peso2 <= 0 || peso2 >= 1000) {
        console.log('Peso válido');
        pesoEValido2 = false;
        tdPeso2.textContent = ('Peso inválido');
      }

      if (altura2 <= 0 || altura2 >= 3.00) {
        console.log('Altura inválida');
        alturaEValida2 = false;
        tdAltura2.textContent = ('Altura inválida');
      }

      if (pesoEValido2 && alturaEValida2) {
        const imc2 = peso2 / (altura2 * altura2);
        tdImc2.textContent = imc2.toFixed(2);
      }



      const paciente3 = document.querySelector('#terceiro-paciente');
      const tdPeso3 = paciente3.querySelector('.info-peso');
      const peso3 = tdPeso3.textContent;
      const tdAltura3 = paciente3.querySelector('.info-altura');
      const altura3 = tdAltura3.textContent;
      const tdImc3 = paciente3.querySelector('.info-imc');

      let pesoEValido3 = true;
      let alturaEValida3 = true;


      if (peso3 <= 0 || peso3 >= 1000) {
        console.log('Peso inválido');
        pesoEValido3 = false;
        tdPeso3.textContent = ('Peso inválido')
      }

      if (altura3 <= 0 || altura3 >= 3) {
        console.log('Altura inválida');
        alturaEValida3 = false;
        tdAltura3.textContent = ('Altura inválida');
      }

      if (alturaEValida3 && pesoEValido3) {
        const imc3 = peso3 / (altura3 * altura3);
        tdImc3.textContent = imc3.toFixed(2);
      }




      const paciente4 = document.querySelector('#quarto-paciente');
      const tdPeso4 = paciente4.querySelector('.info-peso');
      const peso4 = tdPeso4.textContent;
      const tdAltura4 = paciente4.querySelector('.info-altura');
      const altura4 = tdAltura4.textContent;
      const tdImc4 = paciente4.querySelector('.info-imc');

        let pesoEValido4 = true;
        let alturaEValida4 = true;

          if (peso4 <= 0 || peso4 >= 1000) {
            console.log('Peso inválido');
            pesoEValido4 = false;
            tdPeso4.textContent = ('Peso inválido');
          }

          if (altura4 <= 0 || altura4 >= 3.00) {
            console.log('Altura inválida');
            alturaEValida4 = false;
            tdAltura4.textContent = ('Altura inválida');
          }

          if (pesoEValido4 && alturaEValida4) {
            const imc4 = peso4 / (altura4 * altura4);
            tdImc4.textContent = imc4.toFixed(2); // pra deixar só com duas casas decimais
          }



      const paciente5 = document.querySelector('#quinto-paciente');
      const tdPeso5 = paciente5.querySelector('.info-peso');
      const peso5 = tdPeso5.textContent;
      const tdAltura5 = paciente5.querySelector('.info-altura');
      const altura5 = tdAltura5.textContent;
      const tdImc5 = paciente5.querySelector('.info-imc');

      let pesoEValido5 = true;
      let alturaEValida5 = true;

      if (peso5 <= 0 || peso5 >= 1000) {
        console.log('Peso inválido');
        pesoEValido5 = false;
        tdPeso5.textContent = ('Peso inválido');
      }

      if (altura5 <= 0 || altura5 >= 3.00) {
        console.log('Altura inválida');
        alturaEValida5 = false;
        tdAltura5.textContent = ('Altura inválida');
      }

      if (pesoEValido5 && alturaEValida5) {
        const imc5 = peso5 / (altura5 * altura5);
        tdImc5.textContent = imc5.toFixed(2);
      }

      // fazer testes\