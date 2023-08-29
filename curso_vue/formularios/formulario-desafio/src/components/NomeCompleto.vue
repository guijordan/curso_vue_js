<template>
    <div>
        Componente NomeCompleto: <br />
        Nome:
        <input v-model="nome" @input="aoMudarConteudo" /> <br />
        SobreNome:
        <input v-model="sobreNome" @input="aoMudarConteudo" />
    </div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            nome: '',
            sobreNome: '',
        }
    },
    methods: {
        aoMudarConteudo() {
            this.$emit('input', `${this.nome} ${this.sobreNome}`);
        }
    },
    created() {
        let conteudo = this.value.split(" ");
        if (conteudo.length == 1) {
            this.nome = conteudo[0];
        }
        else if (conteudo.length > 1) {
            this.nome = conteudo[0];
            var conteudoSobreNome = [...conteudo];
            conteudoSobreNome.splice(0, 1);
            this.sobreNome = conteudoSobreNome.join(" ");
        }
    }
}
</script>

<style scoped></style>
