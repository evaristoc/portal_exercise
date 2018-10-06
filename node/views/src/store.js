import Vue from 'vue';
import Vuex from 'vuex';
import configYelp from '../../../config/config.js';

Vue.use(Vuex);

import axios from 'axios';
axios.defaults.baseURL = '/api';
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
                    url: 'http://localhost:3000/businesses',
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