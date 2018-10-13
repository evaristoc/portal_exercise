<template>
  <div id="app">   
<pp-header style="{
        height: 100px;
        width: 100%;
        position: fixed;
        background-color:#2b3e50;
    }"></pp-header>
    <div class="container wrapper" style="{display:flex; flex-direction: column;}">
        <pp-main style="z-index:-1; margin-top:130px;"></pp-main>
    </div>
   </div>

</template>

<script>
    import Header from './components/Header.vue';
    import MainView from './components/MainView.vue'
    //import Home from './components/Home.vue';
    import Vue from "vue";
    // imports the ESM module by default
    import VueFlex from "vue-flex";
    // Already autoprefixed for vendor prefixes.
    // Also namespaced to avoid collisions.
    import "vue-flex/dist/vue-flex.css";

    Vue.use(VueFlex);


    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            ppHeader: Header,
            ppMain: MainView,
            //ppHome: Home,
        }
    }
</script>

<style scoped>
    #app {
        height: 100%;
    }
    
    pp-header {
        height: 100px;
        position: fixed;
    }
    
    .wrapper {
        display: flex;
        flex-direction: column;
        height: calc(100% - 80px);
    }
    
    .pp-home {
        flex: 1 0 auto;
    }
</style>

<div class="wrapper" style="{
        display: flex;
        flex-direction: column;
        height: calc(100% - 80px);
    }">

    <router-view style="{
        flex: 1 0 auto;
        margin-top: 170px;
        z-index:-1;
    }"></router-view>

    <!--<pp-home style="{
        flex: 1 0 auto;
        margin-top: 170px;
        z-index:-1;
    }"></pp-home>
    <!--<div class="pp-home" style="{
        flex: 1 0 auto;
        margin-top: 170px;
    }">
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    <p>2</p>
    </div>-->

</div>
