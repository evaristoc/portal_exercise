import Vue from 'vue';
import Vuex from 'vuex';
import configYelp from '../../../config/config.js';

Vue.use(Vuex);

import axios from 'axios';
axios.defaults.baseURL = 'https://api.yelp.com/v3';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + configYelp.config.yelp.APIKEY
    //Setting CORS (should be done from server, no client :( ))
    //-- https://stackoverflow.com/a/50949631
    //-- https://github.com/Yelp/yelp-fusion/issues/386
    //More references:
    //--https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e
    //--https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
    //--https://enable-cors.org/server.html
    //--https://forum.vuejs.org/t/axios-cors-headers-missing/44467/4
    //--https://medium.com/@baphemot/understanding-cors-18ad6b478e2b
    //--https://medium.com/@shahata/why-i-wont-be-using-fetch-api-in-my-apps-6900e6c6fe78
    //--https://github.com/websanova/vue-auth
    //--https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646
    //--https://jsonp.afeld.me/?url=
    //There might be solutions only using webpack server:
    //--https://medium.com/@drgenejones/proxying-an-external-api-with-webpack-serve-code-and-a-restful-data-from-separate-endpoints-4da9b8daf430
    //--https://stackoverflow.com/questions/31602697/webpack-dev-server-cors-issue
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
export default new Vuex.Store({
    state: {
        firstDatafromYelp: ''
    },
    getters: {
        places: (state) => {
            return state.firstDatafromYelp;
        }
    },
    mutations: {
        bringFirstDataYelp: (state, yelpdata) => {
            state.firstDatafromYelp = yelpdata.alldata;
        }
    },
    actions: {
        getFirstDataYelp: context => {
            axios({
                    method: 'get',
                    url: '/businesses/search?location=nl_NL;city=Amsterdam;categories=organic_stores,farmersmarket;limit=1',
                    headers: {
                        dataType: 'jsonp',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                    }
                })
                .then(res => {
                    console.log('action', typeof res)
                    context.commit('bringFirstDataYelp', {
                        alldata: res.data
                    })
                })
                .catch(error => console.log(error))
        }
    }
})