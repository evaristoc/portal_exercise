<template>
    <div class='container wrapper' style="{
        flex-direction: row;
    }">
    <pp-geo class="col-1" style="{
        flex: 0 0 auto;
        position: -webkit-sticky;
        position: sticky;
        top: 170px;
    }"></pp-geo>
    <div class="void col-2" ></div>
    <pp-busg class="col-3" :ydata='ydata' style="{
        flex: 1 1 auto;
        overflow: auto;
    }"></pp-busg>
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
    
    .wrapper {
        flex-direction: row;
    }
    
    pp-geo {
        flex: 0 0 auto;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
    
    .void {
        flex: 1 1 auto;
        width: 50%;
    }
    
    pp-busg {
        flex: 2 2 auto;
        overflow: auto;
    }
    
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        /*[class*="col-"] {
            width: 100%;
        }*/
        .col-1 {
            display: none;
        }
        .col-2 {
            display: none;
        }
        .col-2 {
            width: 10%;
        }
    }
</style>