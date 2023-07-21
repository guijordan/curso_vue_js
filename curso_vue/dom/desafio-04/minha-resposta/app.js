new Vue({
	el: '#desafio',
	data: {
		efeito: true,
		classeA: 'classeA',
		classeB: 'classeB',
		classeParaAplicar:'',
		verdadeiroOuFalso:'',
		cor:'black',
		largura:0,
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.efeito = !this.efeito;
			}, 1000);

		},
		iniciarProgresso() {
			this.largura = 0;
			let intervalo = setInterval(() => {
				this.largura++;
				if(this.largura == 100){
					clearInterval(intervalo);
				}
			}, 100);

		}
	},
	computed: {
		efeitoParaAplicar() {
			return {
				destaque: this.efeito,
				encolher: !this.efeito,
			}
		},

		classeVerdadeiroOuFalso(){
			return {'verdadeiro': this.verdadeiroOuFalso == 'true', 'falso': this.verdadeiroOuFalso == 'false'};
		},
		
		percentualLargura(){
			return this.largura + "%";
		}
	}
})
