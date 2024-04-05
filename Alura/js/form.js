const botaoAdicionar = document.querySelector('#adicionar-paciente');
    botaoAdicionar.addEventListener('click', function(event){
      event.preventDefault();

    const form = document.querySelector('#form-adiciona')

    // pegar os dados do form no html
    const nome = form.nome.value;
    const peso = form.peso.value;
    const altura = form.altura.value;
    const gordura = form.gordura.value;

    const pacienteTr = document.createElement('tr');

    // criando os td
    const pesoTd = document.createElement('td');
    const nomeTd = document.createElement('td');
    const alturaTd = document.createElement('td');
    const gorduraTd = document.createElement('td');
    const imcTd = document.createElement('td');

    // preenchendo os td com os valores que pegamos do form
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculeImc(peso, altura);

    // Convertendo peso e altura para números antes de calcular o IMC
    const pesoNumero = parseFloat(peso);
    const alturaNumero = parseFloat(altura);
    imcTd.textContent = calculeImc(pesoNumero, alturaNumero);

    // colocando os td dentro do tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // trouxemos o tr que criamos, para a tabela que ja existia no html
    const tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

    });

    /* titulo.addEventListener('click', function (){
        console.log('posso chamar uma função anônima')
      });


      function mostraMensagem () {
        console.log('Olá, eu fui clicado!');
      } 
      */