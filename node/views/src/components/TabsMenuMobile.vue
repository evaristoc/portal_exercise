<template>
 <b-card no-body>
  <b-tabs pills card>
    <b-tab title="Businesses" active>
            <!--<div class='col-sm-12 businesscard' v-for="(business, busindex) in ydata">
                <pp-buscards :business='business' :busindex='busindex'></pp-buscards>
          </div> -->
    </b-tab>

    <b-tab title="Map">
      <pp-geo></pp-geo>
    </b-tab>
    <b-tab title="CityEvents">
      <pp-cevents></pp-cevents>
    </b-tab>
  </b-tabs>
</b-card>
</template>
<script>
    import BusinessCards from './HomeSub/BusinessCards.vue'
    import Geo from './HomeSub/Geo.vue'
    import CityEventsTable from './HomeSub/CityEventsTable.vue'

    export default {
        computed: {
            ydata() {
                return this.$store.getters.places
            }
        },
        components: {
            ppBuscards: BusinessCards,
            ppCevents: CityEventsTable,
            ppGeo: Geo

        }
    }
</script>