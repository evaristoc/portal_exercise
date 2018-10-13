<template>
    <div class="wraper" v-if='isDesktop()'>
    <div class="col-lg-7 geo">
        <pp-geo></pp-geo>
    </div>
    <div class="col-lg-5" style="">
        <pp-busg :ydata='ydata'></pp-busg>
    </div>
    </div>
    <div v-else>
        <div class="container">
            <div class="row">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#menucourse1">Places</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menucourse2">Map</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#menucourse3">Events</a>
                    </li>
                </ul>
            </div>
        </div>


        <!-- Tab panes -->
        <!--https://codepen.io/aguko/pen/bdEzya-->

        <div class="row">
            <div class="tab-content">
                <div class="tab-pane active" id="menucourse1">
                    <br>
                    <h3><strong>Places</strong></h3>
                    <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>-->
                    <div class="card-deck" style="color: #333;">
                        <div class="card project-card bg-warning">
                            <div class="card-body">
                                <h4 class="card-title">LekkerEten</h4>
                                <p class="card-text">Nothing better than this!!</p>
                                <p class="p-2 mb-3 bg-dark text-white">GOOD PRICE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="menucourse2">
                    <br>
                    <h3><strong>Map</strong></h3>
                    <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>-->
                    <div class="card-deck" style="color: #333;">
                        <div class="card project-card bg-warning">
                            <div class="card-body">
                                <h4 class="card-title">Map</h4>
                                <p class="card-text">of</p>
                                <p class="p-2 mb-3 bg-dark text-white">Amsterdam</p>
                            </div>
                        </div>
                     </div>
                </div>
                <div class="tab-pane" id="menucourse3">
                    <br>
                    <h3><strong>Events</strong></h3>
                    <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>-->
                    <div class="card-deck" style="color: #333;">
                        <div class="card project-card bg-warning">
                            <div class="card-body">
                                <h4 class="card-title">PapaUpa</h4>
                                <p class="card-text">the band that is rocking the city</p>
                                <p class="p-2 mb-3 bg-dark text-white">Roots Festival</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    /* resize images */
    
    img {
        width: 70%;
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
            ppBusg: BusinessGridComponent,

        },
        created() {
            this.$store.dispatch('getFirstDataYelp')
        },

        //TODO: introduce a resizing method? https://stackoverflow.com/questions/641857/javascript-window-resize-event
        // or CSS media? Bootstrap as first solution

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
    
    .geo {
        flex: 0 0 auto;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
    }
    
    .void {
        flex: 1 1 auto;
        width: 20%;
    }
    /*
    pp-busg {
        flex: 2 2 auto;
        overflow: auto;
    }
    */
    
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
<div class='container wrapper' v-if="isDesktop()" style="{
        flex-direction: row;
    }">
    <!--<pp-geo class="col-1" style="{
        flex: 0 0 auto;
        position: -webkit-sticky;
        position: sticky;
        top: 170px;
    }"></pp-geo>-->
    <div class="col-1" style="{
        flex: 0 0 auto;
        width:900%; /*??*/
        margin-right:5%;
        padding-right:20px;
        position: -webkit-sticky;
        position: sticky;
        top: 170px;
    }">
        <pp-geo style="{
        flex: 0 0 auto;
        position: -webkit-sticky;
        position: sticky;
        top: 170px;}"></pp-geo>
    </div>
    <div class="void col-2"></div>
    <pp-busg class="col-3" :ydata='ydata' style="{
        flex: 1 1 auto;
        overflow: auto;
    }"></pp-busg>
</div>
<div class="container" v-else>
</div>