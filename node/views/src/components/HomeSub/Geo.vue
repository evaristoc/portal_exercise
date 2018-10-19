<template>
        <b-container>
        <b-row>
            <!--<div class='jumbotron' style="width:100%;"><h1>HELLO MAP!</h1></div>-->
        <googlemaps-map
            ref="map"
            class="map"
            :center.sync="mapCenter"
            :zoom.sync="zoom"
            style="(height:10px;width:950%; transform:translate(0px,-100px)}">
        
                <googlemaps-marker
                v-for="marker of ydata"
                :key="marker.id"
                :label="{
                color: marker === currentmarker ? 'white' : 'black',
                fontFamily: 'Material Icons',
                fontSize: '20px',
                }"
				:title="marker.name"
				:position="{lat:marker.coordinates.latitude, lng:marker.coordinates.longitude}"/>
  ></googlemaps-marker>
        
        </googlemaps-map>
        </b-row>
        </b-container>
        
</template>
<script>
    import Vue from 'vue'
    import VueGoogleMaps from 'vue-googlemaps'
    import 'vue-googlemaps/dist/vue-googlemaps.css' //This defines the css!!

    import configGMap from '../../../../../config/config.js'; //homesub/components/src/views/node
    import axios from 'axios';

    Vue.use(VueGoogleMaps, {
        load: { //E: this is the loadMap() function
            // put your google API key either in the ./config/local.env.js file or just hardcode in the string below
            apiKey: configGMap.config.google.browser.MapsAPIKEY || '',
            libraries: ['places'],
            useBetaRenderer: false
        }
    })

    export default {
        data() { //E: in data we can define the mapOptions()
            return {
                mapCenter: {
                    lat: 52.370216,
                    lng: 4.895168
                },
                markers: [{
                    title: "Amsterdam",
                    position: {
                        lat: 52.370216,
                        lng: 4.895168
                    }
                }],
                zoom: 13
            }
        },
        computed: {
            ydata() {
                let places = this.$store.getters.places;
                let index = this.$store.getters.pagePlaces;
                return places.slice((index - 1) * 3, index * 3);
            }
        },
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
        margin-left: 15px;
        overflow: scroll;
    }
</style>