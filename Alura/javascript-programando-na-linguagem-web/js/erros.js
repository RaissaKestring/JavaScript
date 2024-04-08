const titulo = document.querySelector('h1');
console.log(titulo);
// <h1>Aparecida Nutrição</h1>
console.log(titulo.textContent);
// Aparecida Nutrição
titulo.textContent = 'Aparecida Nutricionista';
// Muda o título
document.querySelector('.titulo');
// É uma boa prática mudar o nome do título, não pela tag 'h1', mas sim criando uma classe, caso eu queira passar de h1 para h2 no meu código, não dará problema e não terei que mudar tudo

/* O problema de se buscar uma tag no DOM é que o código JavaScript fica muito atrelado ao HTML. Caso o desenvolvedor decida fazer alterações no HTML, o código deixará de funcionar. Por isso, é uma boa prática não buscarmos por uma tag HTML específica, e usar outras opções que a função querySelector() nos disponibiliza.
*/
console.log('Fui carregado de um arquivo externo');

const pacientes = document.querySelectorAll('.paciente');

for(let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    const tdPeso = paciente.querySelector('.info-peso');
    const peso = tdPeso.textContent;
    const tdAltura = paciente.querySelector('.info-altura');
    const altura = tdAltura.textContent;
    const tdImc = paciente.querySelector('.info-imc');

    };

    titulo.addEventListener('click', function() {
      console.log('Oi, cliquei no botao');
    });          

    let pesoEValido = true;
    let alturaEValida = true;

    if (peso <= 0 || peso >= 1000) {
      console.log('Peso inválido');
      pesoEValido = false;
      tdPeso.textContent = 'Peso inválido';
      pacientes.classList.add('paciente-invalido');
    }

    if (altura <= 0 || altura >= 3.00) {
      console.log('Altura inválida');
      alturaEValida = false;
      tdAltura.textContent = 'Altura inválida';
      pacientes.classList.add('paciente-invalido');
    }

    if (alturaEValida && pesoEValido) {
      const imc = calculeImc(peso, altura);
      imc.textContent = imc;
    };


    function calculeImc(peso, altura) {

      let imc = peso / (altura * altura);

      return imc;
    }