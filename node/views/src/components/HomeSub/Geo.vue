<template>
        
            <div class="container">
            <div class="row">
            <div class="jumbotron col-sm-3 col-3">
                <h1>HELLO MAP!</h1>
            </div>
            <div class="row eventstable">
                <pp-cevents></pp-cevents>
            </div>
            </div>
            </div>
        <!--<googlemaps-map
            ref="map"
            class="map"
            :center.sync="mapCenter"
            :zoom.sync="zoom"
            style="(height:10px;width:950%; transform:translate(0px,-100px)}">
        </googlemaps-map>-->
        
</template>
<script>
    import Vue from 'vue'
    import VueGoogleMaps from 'vue-googlemaps'
    import 'vue-googlemaps/dist/vue-googlemaps.css' //This defines the css!!
    import CityEvents from './CityEvents.vue';

    //import configGMap from '../../../../../config/config.js'; //homesub/components/src/views/node
    import axios from 'axios';

    /*
        Vue.use(VueGoogleMaps, {
            load: { //E: this is the loadMap() function
                // put your google API key either in the ./config/local.env.js file or just hardcode in the string below
                apiKey: configGMap.config.google.browser.MapsAPIKEY || '',
                libraries: ['places'],
                useBetaRenderer: false
            }
        })
    */
    export default {
        data() { //E: in data we can define the mapOptions()
            return {
                mapCenter: {
                    lat: 52.370216,
                    lng: 4.895168
                },
                zoom: 13
            }
        },
        components: {
            ppCevents: CityEvents
        }
    }
    /*
    OBSERVATIONS:
    --- the <googlemaps-map ...></googlemaps-map> is A COMPONENT, so vue-googlemaps is actually a component accompanied with a css
    */

    //REFERENCES:
    //--https://hackernoon.com/how-to-create-an-awesome-store-locator-app-using-vuejs-cosmic-js-and-google-maps-d813b3c4d157
    //--https://forum.vuejs.org/t/style-binding-on-pseudo-selector/5544/6
</script>
<style scoped>
    div {
        width: 100%;
        height: 400px;
    }
    
    .eventstable {
        margin-left: 15px;
        overflow: scroll;
    }
</style>
