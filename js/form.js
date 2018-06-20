var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault(); //desabilita procedimento padrão de clicar no boto e recarregar pagina
	
	var form = document.querySelector("#form-adiciona");  //Pega os dados do formulário
	
	var paciente = obtemPacienteDoFormulario(form); //Cria um pacinete com os dados do formulário
		
	var erros = validaPaciente(paciente); //Cria uma variável chamando o array de erro
	
	if (erros.length > 0) { //Se erro for maior de 0 cria um LI no html conforme função
		exibeMensagensDeErro(erros);
		return;
	}

    adicionaPacienteNaTabela(paciente);

	form.reset(); //reseta os campos do formulário

	var ul = document.querySelector("#mensagens-erro"); //Limpa a LI que mostra os erros caso na rodada anteorios tivesse existido um
	ul.innerHTML = "";
	document.querySelector("#mensagens-erro").style.display = 'none'; 
	
//FUNÇÕES DO FORMULÁRIO
	//Obtem dados do formulario e cria um objeto
	function obtemPacienteDoFormulario(form){
		var paciente = { //Cria um objeto paciente atribuindo valores do formulário
			nome 	: form.nome.value,
			peso 	: form.peso.value,
			altura 	: form.altura.value,
			gordura : form.gordura.value,
			imc 	: calculaImc(form.peso.value, form.altura.value)
		}
		return paciente;
	}

	//Monta as Tds
	function montaTd(dado, classe){
		var td = document.createElement("td"); //cria Td
		td.classList.add(classe); //da uma classe com o nome da classe passada pelo parametro
		td.textContent = dado; //coloca o conteudo da td
		return td;
	}

	//Monta as TRs
	function montaTr(paciente){
		var pacienteTr = document.createElement("tr");
		pacienteTr.classList.add("paciente");
		//cria tds e adicionva dentro da TD
		pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    	//retorna TR
    	return  pacienteTr;
	}

	//Valida dados inseridos no formulário
	function validaPaciente(paciente){
		var erros = []; //Cria um array para contatenar os erro e mostratodos juntos
		
		//Valida campos em branco
		if (paciente.nome.length ==0) {erros.push("- Nome não pode ficar vazio");}  //Valida se o nome esta vazio
		if (paciente.gordura.length == 0) {erros.push("- Gordura não pode ficar vazia");}  //Valida se a gordura esta vazia
		if (paciente.peso.length == 0) {erros.push("- Peso não pode ficar vazio");}  //Valida se o peso esta vazio
		if (paciente.altura.length == 0) {erros.push("- Altura não pode ficar vazia");}  //Valida se a altura esta vazia
		//valida dados fora do padrão
		if (!validaPeso(paciente.peso)) {erro.push("Peso inválido");}
		if(!validaAltura(paciente.altura)) {erro.push("Altura inválida")}
	return erros;
	}
	
	function exibeMensagensDeErro(erros){

		var ul = document.querySelector("#mensagens-erro"); //Limpa a LI que mostra os erros caso na rodada anteorios tivesse existido um
    	ul.innerHTML = "";
    	document.querySelector("#mensagens-erro").style.display = 'none';
		
		erros.forEach(function(erro){
			document.querySelector("#mensagens-erro").style.display = 'block';
			var li = document.createElement("li"); //Para cada erro que tenha existido insere na LI
			li.textContent = erro;
			ul.appendChild(li);
		});
	}

	//Função para adicionar paciente na tabela
	function adicionaPacienteNaTabela(paciente){
		var pacienteTr = montaTr(paciente);
		var tabela = document.querySelector("#tabela-pacientes"); //Coloca a tabela dentro do JavaScript
		tabela.appendChild(pacienteTr); //Adiciona o TR dentro da Tabela
	}
});