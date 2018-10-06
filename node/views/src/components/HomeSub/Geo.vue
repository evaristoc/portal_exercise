<template>
    <div class="jumbotron"></div>
</template>
<script>
    import configGMap from '../../../../../config/config.js';
    import axios from 'axios';

    export default {
        mounted() {}
    }
    axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' +
            item + '&key=' + configMap.google.browser.APIKEYFirebase)
        .then(response => console.log("Yeah!"))
        .catch(err => {
            console.log(err) //Axios entire error message
            console.log(err.response.data.error) //Google API error message 
        })
        //REFERENCES:
        //--https://serversideup.net/displaying-resources-google-map-vue-js/
        //--https://developers.google.com/maps/documentation/javascript/tutorial
</script>