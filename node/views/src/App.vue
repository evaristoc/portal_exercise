<template>
  <div id="app">
    <pp-header></pp-header>
    <pp-home></pp-home>
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
            ppHome: Home,
        }
    }
</script>

<style scoped>

</style>