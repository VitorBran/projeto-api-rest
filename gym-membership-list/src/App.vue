<template>
  <div>
    <app-header></app-header>
    <div class="content-wrapper">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from './components/header.vue';
import footer from './components/footer.vue';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import bootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  data () {
    return {
    }
  },
  components: {
    'app-header': header,
    'app-footer': footer
  }
}
</script>

<style>

html {
  --main-color: #7c94a8;
  --secondary-color: #ccc;
}

body {
  background-attachment: fixed;
  background-image: linear-gradient(50deg, var(--main-color), var(--secondary-color), var(--main-color));
  background-repeat: no-repeat;
}

body, button {
  font-family: 'Russo One', sans-serif;
}

a {
  color: var(--main-color);
}

a:hover {
  color: var(--main-color);
  text-decoration: none;
}

.content-wrapper {
  margin: 20px 0;
  min-height: 100vh;
  width: 100vw;
}

.container {
  background-color: #fff;
  border: 0.5px solid var(--main-color);
  color: var(--main-color);
  padding: 15px;
}

table, form {
  font-family: 'Open Sans', sans-serif;
}

@media only screen and (min-width: 720px) {
  .content-wrapper {
    margin: 20px auto;
    width: 50vw;
  }
}
</style>
