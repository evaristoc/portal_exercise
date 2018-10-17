<!--<template>
<div id="tabs" class="container">

    <div class="tabs">
        <a @click="activetab = 1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Tab 1</a>
        <a @click="activetab = 2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Tab 2</a>
        <a @click="activetab = 3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Tab 3</a>
    </div>

    <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
            Content for tab one
        </div>
        <div v-if="activetab === 2" class="tabcontent">
            Content for tab two
        </div>
        <div v-if="activetab === 3" class="tabcontent">
            Content for tab three
        </div>
    </div>

</div>
</template>
<script>
    //https://vuejsexamples.com/tabbed-content-with-vue-js/
    //https://codepen.io/manni/pen/zZPXGx
    import BusinessCards from './HomeSub/BusinessCards.vue'
    import Geo from './HomeSub/Geo.vue'
    import CityEventsTable from './HomeSub/CityEventsTable.vue'

    export default {
        data() {
            return {
                activetab: 1
            }
        },

        computed: {
            ydata() {
                return this.$store.getters.places
            }
        },
        components: {
            ppBuscards: BusinessCards,
            ppCevents: CityEventsTable,
            ppGeo: Geo

        }
    }
</script>
<style scoped>
    /* RESET */
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    .container {
        max-width: 620px;
        min-width: 420px;
        margin: 40px auto;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.9em;
        color: #888;
    }
    /* Style the tabs */
    
    .tabs {
        overflow: hidden;
        margin-left: 20px;
        /*hide bottom border*/
        margin-bottom: -2px;
    }
    
    .tabs ul {
        list-style-type: none;
        margin-left: 20px;
    }
    
    .tabs a {
        float: left;
        cursor: pointer;
        padding: 12px 24px;
        transition: background-color 0.2s;
        border: 1px solid #ccc;
        border-right: none;
        background-color: #f1f1f1;
        border-radius: 10px 10px 0 0;
        font-weight: bold;
    }
    
    .tabs a:last-child {
        border-right: 1px solid #ccc;
    }
    /* Change background color of tabs on hover */
    
    .tabs a:hover {
        background-color: #aaa;
        color: #fff;
    }
    /* Styling for active tab */
    
    .tabs a.active {
        background-color: #fff;
        color: #484848;
        border-bottom: 2px solid #fff;
        cursor: default;
    }
    /* Style the tab content */
    
    .tabcontent {
        padding: 30px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 3px 3px 6px #e1e1e1
    }
</style>-->

<template>
<div id="tabs" class="container">

    <div class="tabs">
        <a @click="activetab = 1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Tab 1</a>
        <a @click="activetab = 2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Tab 2</a>
        <a @click="activetab = 3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Tab 3</a>
    </div>

    <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
            Content for tab one
        </div>
        <div v-if="activetab === 2" class="tabcontent">
            Content for tab two
        </div>
        <div v-if="activetab === 3" class="tabcontent">
            Content for tab three
        </div>
    </div>

</div>
</template>
<style scoped>
    /* RESET */
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    .container {
        max-width: 620px;
        min-width: 420px;
        margin: 40px auto;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.9em;
        color: #888;
    }
    /* Style the tabs */
    
    .tabs {
        overflow: hidden;
        margin-left: 20px;
        /*hide bottom border*/
        margin-bottom: -2px;
    }
    
    .tabs ul {
        list-style-type: none;
        margin-left: 20px;
    }
    
    .tabs a {
        float: left;
        cursor: pointer;
        padding: 12px 24px;
        transition: background-color 0.2s;
        border: 1px solid #ccc;
        border-right: none;
        background-color: #f1f1f1;
        border-radius: 10px 10px 0 0;
        font-weight: bold;
    }
    
    .tabs a:last-child {
        border-right: 1px solid #ccc;
    }
    /* Change background color of tabs on hover */
    
    .tabs a:hover {
        background-color: #aaa;
        color: #fff;
    }
    /* Styling for active tab */
    
    .tabs a.active {
        background-color: #fff;
        color: #484848;
        border-bottom: 2px solid #fff;
        cursor: default;
    }
    /* Style the tab content */
    
    .tabcontent {
        padding: 30px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 3px 3px 6px #e1e1e1
    }
</style>