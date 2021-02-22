var altura = 0
var largura = 0
var vidas = 1
var tempo =20

var criarMosquitoTempo = 3000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil'){
	criarMosquitoTempo = 3000
} else if(nivel === 'normal') {
	criarMosquitoTempo = 2000
} else if(nivel === 'dificil') {
	criarMosquitoTempo = 800
}
 	
function ajustarTamanho() {
	altura = window.innerHeight
	largura = window.innerWidth

	//console.log(altura, largura)
}

ajustarTamanho()

var cronometro = setInterval(function() {

	tempo -= 1
	if(tempo < 0) {
		window.location.href = 'vitoria.html'
	} else {
	document.getElementById('cronometro').innerHTML = tempo
	}

	} ,1000) 

function posicaoRandom() {

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3) {
			window.location.href = 'gameover.html'
		} else {
		document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'

		vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//Criar elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoRandom() + ' ' + ladoRandom()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function () {
		this.remove()
	}

	document.body.appendChild(mosquito)		
}

function tamanhoRandom() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoRandom() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}