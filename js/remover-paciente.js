var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
     if (event.target.tagName == 'TD') {
	    event.target.parentNode.classList.add("fadeOut"); //Da ao item clicado a classe fadeOut que desaparece o item
	    setTimeout(function() { //Só vai executar o codigo dpeois de um tempo, 0,5 segundos (sleep)
	    event.target.parentNode.remove(); //event: pega o evento, target: região que foi clicada, parentNode: Pai de quem foi clicado (no caso a tr inteira)
	    }, 500);
	}
});