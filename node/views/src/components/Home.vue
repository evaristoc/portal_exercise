<template>
    <div class='container'>
    <pp-geo></pp-geo>
    <pp-busg :ydata='ydata'></pp-busg>

 </div>
</template>
<style scoped>
    /* resize images */
    
    img {
        width: 100%;
        height: 200px;
    }
</style>
<script>
    import GeoComponent from './HomeSub/Geo.vue';
    import BusinessGridComponent from './HomeSub/BusinessGrip.vue';
    export default {
        computed: {
            ydata() {
                return this.$store.getters.places
            }
        },
        components: {
            ppGeo: GeoComponent,
            ppBusg: BusinessGridComponent
        },
        created() {
            this.$store.dispatch('getFirstDataYelp')
        }

    }
    //REFERENCES:
    //--https://stackoverflow.com/a/50120217
    //--https://stackoverflow.com/a/15685819
</script>