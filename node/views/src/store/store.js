import Vue from 'vue';
import Vuex from 'vuex';
import configYelp from '../../../../config/config.js';

Vue.use(Vuex);

import axios from 'axios';
axios.defaults.baseURL = 'https://api.yelp.com/v3';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + configYelp.config.yelp.APIKEY

export default new Vuex.Store({
    state: {
        firstDatafromYelp: None,
        pagingrightcol: 1
    },
    getters: {
        places: (state) => {
            return state.firstDatafromYelp;
        },
        pagePlaces: (state) => {
            return state.paginrightcol;
        }
    },
    mutations: {
        bringFirstDataYelp: (state, yelpdata) => {
            state.firstDatafromYelp = yelpdata.alldata;
        },
        rightcolPagination: (state, page) => {
            state.paginrightcol = page;
        }
    },
    actions: {
        getFirstDataYelp: (context) => {
            axios.get('/')
                .then(res => {
                    console.log('action', typeof res)
                    context.commit('bringFirstDataYelp', {
                        alldata: res.data
                    })
                })
                .catch(error => console.log(error))
        },

        pagingPlaces: (context, page) => {
            context.commit('rightcolPagination', page)
        }
    }
})