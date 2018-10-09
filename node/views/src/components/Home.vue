<template>
    <div class='container wrapper'>
    <pp-geo></pp-geo>
    <div class="void"></div>
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

<style scoped>
    .wrapper {
        display: flex;
        height: 100vh;
    }
    
    pp-geo {
        flex: 0 0 auto;
    }
    
    .void {
        flex: 1 1 auto;
        width: 50%;
    }
    
    pp-busg {
        flex: 2 2 auto;
        overflow: auto;
    }
</style>