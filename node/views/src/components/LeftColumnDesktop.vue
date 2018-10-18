<template>
        <b-container>
        <b-row id="geo">
            <pp-geo></pp-geo>
         </b-row>
        <b-row id="cevents">
            <b-col md="12">
                <pp-cevents></pp-cevents>
            </b-col>
        </b-row>
        </b-container>
        
</template>
<script>
    import Vue from 'vue'
    import VueGoogleMaps from 'vue-googlemaps'
    import 'vue-googlemaps/dist/vue-googlemaps.css' //This defines the css!!
    import Geo from './HomeSub/Geo.vue';
    import CityEvents from './HomeSub/CityEventsTable.vue';

    import configGMap from '../../../../config/config.js'; //homesub/components/src/views/node
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
            ppCevents: CityEvents,
            ppGeo: Geo
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
        /*width: 900%;*/
        height: 400px;
    }
    
    #cevents {
        margin-top: 15px;
        /*margin-left: 15px;
        overflow: scroll;*/
    }
</style>