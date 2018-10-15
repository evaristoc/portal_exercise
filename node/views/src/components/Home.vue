<template>
    <div class='wrapper' style="
        flex-direction: row;
    ">
    <b-row>
    <div class="col-md-8" style="padding-left:2%;">
    <pp-geo style="flex-direction:column; position:sticky;top:107px;"></pp-geo>
    </div>
    <div class="col-md-4" style="padding-right:2%;">
    <pp-busg :ydata='ydata'></pp-busg>
    </div>
    </b-row>
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
        },

        methods: {
            isDesktop() {
                var w = window,
                    d = document,
                    e = d.documentElement,
                    g = d.getElementsByTagName('div')[0],
                    x = w.innerWidth || e.clientWidth || g.clientWidth,
                    y = w.innerHeight || e.clientHeight || g.clientHeight;
                //alert(x + ' × ' + y);
                if (x > 768) {
                    return true
                } else {
                    return false
                }
                if (/Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    //    return true
                    //} else {
                    //    return false
                    document.getElementById("pp-geo").style.display = "none";
                } else {
                    document.getElementById("pp-geo").style.display = "inline";
                }
            }
        }

    }
    //REFERENCES:
    //--https://stackoverflow.com/a/50120217
    //--https://stackoverflow.com/a/15685819
</script>

<style scoped>
    /*.wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100vh;
    }*/
</style>
<b-col cols="1">
    <div class="void col-2"></div>
</b-col>
style=" flex: 2 2 auto; overflow: auto; " flex-direction:column; style=" flex: 0 0 auto; position: -webkit-sticky; position: sticky; top: 130px; "