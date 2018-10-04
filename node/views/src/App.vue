<template>
  <div id="app">
    <div class='container'>
      <pp-header></pp-header>
      <pp-home></pp-home>
  </div>
  </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Home from './components/Home.vue';

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            ppHeader: Header,
            ppHome: Header,
        }
    }
</script>

<style>

</style>