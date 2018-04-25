/*
var botaoAdicionar = document.querySelector("#buscar-pacientes");
console.log("abtes de clicar");

botaoAdicionar.addEventListener("click", function(){ //Adiciona um escutador ao botão
    var xhr = new XMLHttpRequest(); //Cria um objete que lê AJAX

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //Abre a conexão com o link externo
    
    xhr.addEventListener("load", function(){ //Da retorno assim que a requisição completamente carregada
      	var erroAjax = document.querySelector("#erro-ajax"); //Busca a mensagem de erro do html
      	console.log("aqui le");
    	if (xhr.status == 200) { //Se retornar status 200 é pq esta OK
    		
    		erroAjax.classList.add("invisivel"); //Deixa a mensagem de erro invisível
	    	var resposta  = xhr.responseText; //Pega o documento do link e transforma em texto
	    	var pacientes = JSON.parse(resposta); //transforma o formato texto para um array

	    	pacientes.forEach(function(paciente){ //PAra cada paciente do JSON adiciona a tabela
	    		adicionaPacienteNaTabela(pacientes);
	    	});
    	} else {
    		erroAjax.classList.remove("invisivel"); //Se erro nao for igual a 200 mostra erro;
    	}
    });
    xhr.send();//Envia a requisição        
});
*/

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
