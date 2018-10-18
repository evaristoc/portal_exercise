<template>
  <div id="app">
    <pp-header id="ppheader1"></pp-header>
    <pp-header id="ppheader2"></pp-header>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
    import Header from './components/Header.vue'
    import Main from './components/Main.vue'
    import Home from './components/Home.vue'
    import Vue from "vue"
    // imports the ESM module by default
    import VueFlex from "vue-flex"
    // Already autoprefixed for vendor prefixes.
    // Also namespaced to avoid collisions.
    import "vue-flex/dist/vue-flex.css"

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
            //ppMain: Main,
            //ppHome: Home,
        }
    }
</script>

<style scoped>
    #app {
        height: 100%;
    }
    /*pp-header {
        height: 100px;
        position: fixed;
    }*/
    
    .wrapper {
        display: flex;
        flex-direction: column;
        height: calc(100% - 80px);
    }
    
    pp-header {
        height: 100px;
        width: 100%;
    }
    
    router-view {
        flex: 1 0 auto;
    }
    
    @media screen and (min-width:769px) {
        #ppheader1 {
            position: fixed;
            display: inline;
            width: 100%;
            background-color: #2b3e50;
            z-index: 1;
        }
        #ppheader2 {
            display: none;
        }
        router-view {
            margin-top: 107px;
        }
    }
    
    @media screen and (max-width:768px) {
        #ppheader2 {
            position: static;
            display: inline;
        }
        #ppheader1 {
            display: none;
        }
    }
</style>