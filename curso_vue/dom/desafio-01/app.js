new Vue({
    el: "#desafio",
    data: {
        nome: "Guiherme",
        idade:"29",
        imagem: "https://static.todamateria.com.br/upload/es/cu/escultura-grega-og.jpg",
    },
    methods: {
        idadeVezes3(){
            return this.idade * 3;
        },

        random(){
            return Math.random();
        }
    },
});