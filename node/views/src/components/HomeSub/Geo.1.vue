<template>
    <div class="jumbotron" id="cafe-map">
    </div>
</template>
<script>
    import configGMap from '../../../../../config/config.js'; //homesub/components/src/views/node
    import axios from 'axios';

    export default {
        props: {
            'latitude': {
                type: Number,
                default: function() {
                    return 39.50
                }
            },
            'longitude': {
                type: Number,
                default: function() {
                    return -98.35
                }
            },
            'zoom': {
                type: Number,
                default: function() {
                    return 4
                }
            }
        },

        data() {
            return {

            }
        },

        mounted() {
            /*
            We don't want the map to be reactive, so we initialize it locally,
            but don't store it in our data array.
            */
            this.map = new google.maps.Map(document.getElementById('cafe-map'), {
                center: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                zoom: this.zoom
            });
        }
    }
    //axios.get('https://maps.googleapis.com/maps/api/js?v=3&key=' + configGMap.config.google.browser.APIKEYFirebase)
    //    .then(response => console.log("Yeah!"))
    //    .catch(err => {
    //       console.log(err) //Axios entire error message
    //        console.log(err.response.data.error) //Google API error message 
    //    })
    //REFERENCES:
    //--https://serversideup.net/displaying-resources-google-map-vue-js/
    //--https://developers.google.com/maps/documentation/javascript/tutorial
    //--https://sabe.io/tutorials/using-axios-pull-data-rest-api
</script>
<style scoped>
    div {
        width: 100%;
        height: 400px;
    }
</style>