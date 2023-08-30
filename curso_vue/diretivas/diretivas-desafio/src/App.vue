<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<h1 v-minha-diretiva:mensagem="'Oi Família !'">Clique em mim</h1>
	</div>
</template>

<script>
export default {
	directives:{
		'minha-diretiva':{
			bind(el, binding, vnode) {
				let mensagem = '';
				if(binding.arg === 'mensagem'){
					mensagem = binding.value;
				}
				el.onclick = function(event){
					alert(`Você me clicou! ${mensagem}`);
				}
			}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
