var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) { //FOR para verifica os pacientes já existentes na lista
	var paciente = pacientes[i]; //cria a variável paciente

	var tdPeso = paciente.querySelector(".info-peso"); //Pega as informações
	var peso = tdPeso.textContent;
	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	var tdImc = paciente.querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (!validaPeso) {
	    console.log("Peso inválido!");
	    pesoEhValido = false;
	    tdImc.textContent = "Peso inválido";
	}

	if (!validaAltura) {
	    console.log("Altura inválida!");
	    alturaEhValida = false;
	    tdImc.textContent = "Altura inválida";
	}

	if (pesoEhValido && alturaEhValida) {
	    var imc = calculaImc(peso, altura);
	    tdImc.textContent = imc;
	}
}

//Calcula o IMC
function calculaImc(peso, altura){
	imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

//Valida altura do paciente
function validaAltura(altura) {
	if (altura >= 0 && altura <= 3.0) {
		return true;
	} else {
		return false;
	}
}

//Valida peso do paciente
function validaPeso(peso){
	if (peso >= 0 && peso <= 1000) {
		return true;
	} else {
		return false;
	}
}

