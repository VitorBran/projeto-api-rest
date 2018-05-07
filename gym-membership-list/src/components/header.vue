<template>
  <header>
    <router-link to="/" exact>
      <h1> Academia </h1>
    </router-link>
    <router-link to="/add" exact>
      <button class="btn btn-secondary">Adicionar Aluno</button>
    </router-link>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
header {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0;
  box-shadow: 0px 1px 10px #000;
  display: flex;
  flex-flow: column;
  margin: 0;
  padding: 15px;
}

header > * {
  flex:  1;
}

button {
  position: relative;
  width: 100%;
}

h1 {
  color: var(--secondary-color);
  text-shadow: #000 2px 1px;
}

@media only screen and (min-width: 720px) {
  header {
    flex-flow: row;
  }

  button {
    position: absolute;
    right: 15px;
    width: inherit;
  }
}
</style>
