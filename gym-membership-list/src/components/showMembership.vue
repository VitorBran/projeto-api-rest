<template>
  <div>
    <div v-if="!deletted">
      <h2>Dados do Aluno</h2>
      <table class="table">
        <tbody>
          <tr>
            <th>Nome</th>
            <td> {{ membership.name }} </td>
          </tr>
          <tr>
            <th> Data de Nascimento </th>
            <td>
              <input class="form-control" type="date" v-model="membership.birthDate" disabled>
            </td>
          </tr>
          <tr>
            <th> Instrutor </th>
            <td> {{ membership.gymInstructor }} </td>
          </tr>
          <tr>
            <th> Data de ínicio </th>
            <td>
              <input class="form-control" type="date" v-model="membership.startDate" disabled>
            </td>
          </tr>
          <tr>
            <th> Objetivos </th>
            <td>
              <ul>
                <li v-for="goal in membership.goals">{{ goal }}</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link v-bind:to="'/updateMembership/membership/' + id">
        <button class="btn btn-secondary btn-block">Alterar Dados</button>
      </router-link>
      <router-link v-bind:to="'/workoutLog/membership/' + id">
        <button class="btn btn-secondary btn-block">Ficha de Exercícios</button>
      </router-link>
      <button class="btn btn btn-danger btn-block" v-on:click.prevent="del">Deletar Aluno</button>
    </div>

    <div class="alert alert-secondary" v-if="deletted">
      <h3>Aluno deletado com sucesso!</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: this.$route.params.id,
      membership: {},
      deletted: false
    }
  },
  methods: {
    del: function() {
      axios.delete('http://localhost:4000/api/memberships/' + this.id, this.membership).then((response) =>  {
        this.deletted = true;
      });
    }
  },
  created() {
    axios.get('http://localhost:4000/api/memberships/' + this.id).then((response) =>  {
      this.membership = response.data;
    });
  }
}
</script>

<style scoped>
.th {
  text-align: center;
}

button {
  margin: 10px 0;
}

ul {
  list-style: square;
  padding: 0;
}

input {
  width: inherit;
}
</style>
