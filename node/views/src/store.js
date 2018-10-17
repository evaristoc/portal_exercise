import Vue from 'vue';
import Vuex from 'vuex';
import configYelp from '../../../config/config.js';

Vue.use(Vuex);

import axios from 'axios';
export default new Vuex.Store({
    state: {
        firstDatafromYelp: '',
        pagingrightcol: 1
    },
    getters: {
        places: (state) => {
            return state.firstDatafromYelp;
        },
        pagePlaces: (state) => {
            return state.pagingrightcol;
        },
        lengthDatacalc: (state) => {
            if (state.firstDatafromYelp.length !== undefined && state.firstDatafromYelp.length > 0) {
                return state.firstDatafromYelp.length
            }
        }

    },
    mutations: {
        bringFirstDataYelp: (state, yelpdata) => {
            state.firstDatafromYelp = yelpdata.alldata;
        },
        rightcolPagination: (state, page) => {
            state.pagingrightcol = page;
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
        },
        pagingPlaces: (context, page) => {
            context.commit('rightcolPagination', page)
        }
    }
})