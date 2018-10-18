<template>
    <b-card no-body>
  <b-tabs pills card>
    <b-tab title="Places" active>
        <b-row v-for="(business, busindex) in ydata">        
            <pp-buscards :business='business' :busindex='busindex'></pp-buscards>
        </b-row>
        <b-row>
            <pp-pagination></pp-pagination>
        </b-row>
    </b-tab>
    <b-tab title="Map">
        <pp-geo></pp-geo>
    </b-tab>
        <b-tab title="Events">
            <pp-cevents></pp-cevents>
    </b-tab>
  </b-tabs>
</b-card>
</template>
<script>
    import BusinessCards from './HomeSub/BusinessCards.vue'
    import Geo from './HomeSub/Geo.vue'
    import CityEvents from './HomeSub/CityEventsTable.vue'
    import Pagination from './HomeSub/RightColPagination.vue'

    export default {

        computed: {
            ydata() {
                let places = this.$store.getters.places;
                let index = this.$store.getters.pagePlaces;
                return places.slice((index - 1) * 3, index * 3);
            }
        },

        components: {
            ppBuscards: BusinessCards,
            ppGeo: Geo,
            ppCevents: CityEvents,
            ppPagination: Pagination
        }
    }
</script>
<style>

</style>