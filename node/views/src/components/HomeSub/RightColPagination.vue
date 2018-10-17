<template>
<div>
    <h6>Default</h6>
    <b-pagination size="md" align="center" :total-rows="100" :currentPage='currentPage' @click="currentPage" :per-page="3">
    </b-pagination>
    <div>currentPage: {{currentPage}}</div>
  </div>    
</template>
<script>
    import {
        mapActions
    } from 'vuex'


    export default {
        data() {},
        computed: {
            currentPage() {
                this.$store.getters.pagingrightcol;
            }
        },

        methods: {
            ...mapActions(['pagingPlaces']),
            currentPage(event) {
                this.$store.dispatch('pagingPlaces', event.target.currentPage)
            }
        }
    }
</script>