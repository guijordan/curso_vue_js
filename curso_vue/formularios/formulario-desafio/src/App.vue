<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<Rotulo nome="Nome">
					<input type="text" v-model="nome" />
				</Rotulo>
				<Rotulo nome="Sobre Nome">
					<input type="text" v-model="sobreNome" />
				</Rotulo>

				<Rotulo nome="Email">
					<input v-model="email" />
				</Rotulo>

				<Rotulo nome="Senha">
					<input type="password" v-model="senha" />
				</Rotulo>
				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazenar Dados">
					<div>
						<input type="radio" v-model="armazenarDados" value="true" name="armazenar" />Sim
						<input type="radio" v-model="armazenarDados" value="false" name="armazenar" />Não
					</div>
				</Rotulo>

				<!-- Exercicio 03 -->
				<NomeCompleto v-model="nomeCompleto"></NomeCompleto>

				<button @click.prevent="enviarDados">Enviar Dados</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome">
					{{ nome }}
				</Rotulo>
				<Rotulo nome="Nome">
					{{ sobreNome }}
				</Rotulo>
				<Rotulo nome="Email">
					{{ email }}
				</Rotulo>
				<Rotulo nome="Senha">
					{{ senha }}
				</Rotulo>
				<Rotulo nome="Armazenar Dados">
					{{ armazenarDados }}
				</Rotulo>
				<Rotulo nome="Nome Completo">
					{{ nomeCompleto }}
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import NomeCompleto from './components/NomeCompleto.vue';
import Rotulo from './components/Rotulo.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data() {
		return {
			nome: '',
			sobreNome: '',
			email: '',
			senha: '',
			armazenarDados: false,
			enviado: false,
			nomeCompleto: 'Guilherme Jordan De Oliveira'
		};
	},
	methods: {
		enviarDados() {
			this.enviado = true;
		}
	}
}
</script>

<style>
body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
