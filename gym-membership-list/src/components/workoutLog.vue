<template>
  <div>
    <div class="container add-exercise-area">
      <h2>Adicionar Exercício</h2>
      <form>
        <div class="form-group">
          <label>Grupo Muscular</label>
          <select class="form-control" v-model="exercise.muscularGroup">
            <option v-for="muscularGroup in muscularGroups"> {{ muscularGroup }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>Exercício</label>
          <input type="text" class="form-control" v-model="exercise.name" placeholder="Informe o nome do exercício">
        </div>

        <div class="form-group">
          <label>Séries</label>
          <input type="number" class="form-control" v-model="exercise.sets" placeholder="Informe o número de séries">
        </div>

        <div class="form-group">
          <label>Repetições</label>
          <input type="number" class="form-control" v-model="exercise.repetitions" placeholder="Informe o número de repetições">
        </div>

        <button class="btn btn-secondary btn-block" v-on:click.prevent="addExercise">Adicionar Exercício</button>
      </form>
    </div>

    <div class="container workoutLog-area">
      <h2>Ficha de Exercícios</h2>
      <p>Aluno(a): {{membership.name}}</p>

      <table class="table" v-for="(exercise, index) in membership.exercises"  v-if="exercise.name">
        <thead>
          <th class="th" colspan="2"> {{ exercise.name }} </th>
        </thead>
        <tbody>
          <tr>
            <th> Grupo Muscular </th>
            <td> {{ exercise.muscularGroup }} </td>
          </tr>
          <tr>
            <th> Séries </th>
            <td> {{ exercise.sets }} </td>
          </tr>
          <tr>
            <th> Repetições </th>
            <td> {{ exercise.repetitions }} </td>
          </tr>
          <tr>
            <th colspan="2">
              <button class="btn btn-danger btn-sm btn-block" v-on:click="DeleteExercise(index)">Remover Exercício</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: this.$route.params.id,
      membership: {},
      exercise: {},
      muscularGroups: [
        "Abdômen",
        "Ante-braço",
        "Bíceps",
        "Costas",
        "Coxas e Glúteos",
        "Ombros",
        "Panturrilha",
        "Peitoral",
        "Trapézios",
        "Tríceps"
      ]
    }
  },
  methods: {
    addExercise: function() {
      this.membership.exercises.push(this.exercise);
      axios.put('http://localhost:4000/api/memberships/' + this.id, this.membership);
      this.exercise = {};
    },
    DeleteExercise: function(index) {
      this.membership.exercises.splice(index, 1);
      axios.put('http://localhost:4000/api/memberships/' + this.id, this.membership);
    },
  },
  created() {
    axios.get('http://localhost:4000/api/memberships/' + this.id).then((response) =>  {
      this.membership = response.data;
    });
  }
}
</script>

<style scoped>
.add-exercise-area {
  margin-bottom: 15px;
}

table {
  width: 100%;
}

table div {
  margin: 0;
}

.th {
  text-align: center;
}
</style>
