<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
        <p>Completo: {{ $route.query.completo ? 'Sim' : 'Não'}}</p>
        <p>Língua: {{ $route.query.lingua }}</p>
        <p></p>
    </div>
</template>
<script>
export default {
    props:['id'],
}
</script>
<style></style>