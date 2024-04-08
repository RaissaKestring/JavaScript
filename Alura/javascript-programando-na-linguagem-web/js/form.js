let pacienteTr = document.createElement('tr');
    (document.querySelector('#adicionar-paciente')).addEventListener('click', function(event){
      event.preventDefault();

    let form = document.querySelector('#form-adiciona')
    let paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    // cria a tr e a td do paciente
    

    // criando os td
    let pesoTd = document.createElement('td');
    let nomeTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');

    // preenchendo os td com os valores que pegamos do form
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculeImc(peso, altura);

    // Convertendo peso e altura para números antes de calcular o IMC
    let pesoNumero = parseFloat(peso).toFixed(2); // toFixed nao deu certo
    let alturaNumero = parseFloat(altura).toFixed(2);
    imcTd.textContent = calculeImc(pesoNumero, alturaNumero);

    // colocando os td dentro do tr
    

    // trouxemos o tr que criamos, para a tabela que ja existia no html
    // adicionando pacientes na tabela
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    });

    function obtemPacienteDoFormulario(form) {
      // Extraindo informações do paciente do form
      let paciente = {
        nome: form.querySelector('[name="nome"]').value,
        peso: form.querySelector('[name="peso"]').value,
        altura: form.querySelector('[name="altura"]').value,
        gordura: form.querySelector('[name="gordura"]').value,
        imc: calculeImc(form.querySelector('[name="peso"]').value && form.querySelector('[name="altura"]').value),
      }

      return paciente;
    }

    function adicionarNovoPaciente(nome, peso, altura) {
      let tabelaPacientes = document.querySelector('#tabela-pacientes tbody');
      let novaLinha = document.createElement('tr');
      
      // Limita o número de casas decimais para o peso e altura
      let pesoFormatado = parseFloat(peso).toFixed(2);
      let alturaFormatada = parseFloat(altura).toFixed(2);
      
      // Preenche as células da linha com os valores fornecidos
      let nomeTd = document.createElement('td');
      nomeTd.textContent = nome;
  
      let pesoTd = document.createElement('td');
      pesoTd.textContent = pesoFormatado;
  
      let alturaTd = document.createElement('td');
      alturaTd.textContent = alturaFormatada;
  
      let imcTd = document.createElement('td');
      let imc = calculeImc(parseFloat(peso), parseFloat(altura)).toFixed(2);
      imcTd.textContent = imc;
  
      // Adiciona as células à nova linha
      pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
      tabelaPacientes.appendChild(novaLinha);
  
      // Chama a função para calcular e exibir o IMC após adicionar o novo paciente
      calcularIMC();
  }
  
  let botaoAdicionar = document.querySelector('#adicionar-paciente');
  (document.querySelector('#adicionar-paciente')).addEventListener('click', function(event){
      event.preventDefault();
  
      let form = document.querySelector('#form-adiciona')
      let paciente = obtemPacienteDoFormulario(form);
      console.log(paciente);
  
      adicionarNovoPaciente(paciente.nome, paciente.peso, paciente.altura);
  });
  
  function obtemPacienteDoFormulario(form) {
      // Extraindo informações do paciente do form
      let paciente = {
          nome: form.querySelector('[name="nome"]').value,
          peso: form.querySelector('[name="peso"]').value,
          altura: form.querySelector('[name="altura"]').value,
          gordura: form.querySelector('[name="gordura"]').value
      }
  
      // Convertendo peso e altura para números antes de calcular o IMC
      paciente.imc = calculeImc(parseFloat(paciente.peso), parseFloat(paciente.altura)).toFixed(2);
  
      return paciente;
  }
    
    

    /* titulo.addEventListener('click', function (){
        console.log('posso chamar uma função anônima')
      });


      function mostraMensagem () {
        console.log('Olá, eu fui clicado!');
      } 
      */