<template>
  <div>
    <h2>Adicione Um Novo Aluno</h2>
    <form v-if="!submitted">
      <div class="form-group">
        <label>Nome</label>
        <input type="text" class="form-control" v-model="membership.name" placeholder="Informe o nome do aluno">
      </div>

      <div class="form-group">
        <label>Data de Nascimento</label>
        <input type="date" class="form-control" v-model="membership.birthDate">
      </div>

      <div class="form-group">
        <label>Instrutor</label>
        <select class="form-control" v-model="membership.gymInstructor">
          <option v-for="gymInstructor in gymInstructors"> {{ gymInstructor }}</option>
        </select>
      </div>

      <div class="form-group">
        <label> Data de Início </label>
        <input type="date" class="form-control" v-model="membership.startDate">
      </div>

      <div class="form-group">
        <p> Objetivos </p>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="Hipertrofia" v-model="membership.goals">
          <label class="form-check-label">Hipertrofia</label>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="Emagrecimento" v-model="membership.goals">
          <label class="form-check-label">Emagrecimento</label>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="Fortalecimento Muscular" v-model="membership.goals">
          <label class="form-check-label">Fortalecimento Muscular</label>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="Lazer" v-model="membership.goals">
          <label class="form-check-label">Lazer</label>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="Força e Resistência" v-model="membership.goals">
          <label class="form-check-label">Força e Resistência</label>
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" value="Trabalho de Recuperação" v-model="membership.goals">
          <label class="form-check-label">Trabalho de Recuperação</label>
        </div>
      </div>

      <button class="btn btn-secondary btn-block" v-on:click.prevent="post">Adicionar Aluno</button>
    </form>

    <div class="alert alert-secondary" v-if="submitted">
      <h3>Aluno Adicionado com Sucesso!</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      membership: {
        goals: [],
        exercises: []
      },
      gymInstructors: [
        "Maromberta Silva",
        "Frangonildo Santos",
        "Bombadilson Oliveira",
        "Monstronaldo Souza"
      ],
      submitted: false
    }
  },
  methods: {
    post: function() {
      axios.post('http://localhost:4000/api/memberships', this.membership).then((response) =>  {
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped>
</style>
