<template>
<div>
    <h6>Default</h6>
    <b-pagination size="md" align="center" :total-rows="totalRows" v-model='currentPage' :per-page="perPage">
    </b-pagination>
    <div>currentPage: {{currentPage}}</div>
  </div>    
</template>
<script>
    export default {
        data() {
            return {
                perPage: 3,
                //totalRows: 10 // 0 is a value of 1; none is also valid value; then all is defined based on per-page
            }
        },
        computed: {
            currentPage: {
                get() {
                    return this.$store.getters.pagePlaces;
                },
                set(value) {
                    this.$store.dispatch('pagingPlaces', value)
                }
            },
            totalRows(state) {
                return this.$store.getters.lengthDatacalc;
            },
        },

        //methods: {
        //    ...mapActions(['pagingPlaces']),
        //    updatecurrentPage(event) {
        //        console.log(event.target)
        //        this.$store.dispatch('pagingPlaces', event.target.currentPage)
        //    }
        //}
        //methods: {
        //    updateValue(event){
        //        console.log(event.target)
        //    }
        //}
    }
</script>