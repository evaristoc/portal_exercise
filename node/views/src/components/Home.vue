<template>
    <div class='wrapper' v-if="getWindowWidth()"> {{WindowWidth}}
        <b-row>
            <b-col id="ppleftdiv" md="8">
                <pp-left id="ppleft"></pp-left>
            </b-col>
            <b-col id="pprightdiv" md="4">
                <pp-right></pp-right>
            </b-col>
        </b-row>
    </div>
    <b-row class="justify-content-md-center centered" v-else> {{WindowWidth}}
        <b-col sm="12">
            <pp-mobile></pp-mobile>
        </b-col>
    </b-row>
</template>
<style scoped>
    /* resize images */
    
    img {
        width: 100%;
        height: 200px;
    }
</style>
<script>
    import LeftComponents from './LeftColumnDesktop.vue';
    import RightComponents from './RightColumnDesktop.vue';
    import TabsMenuMobile from './TabsMenuMobile.vue';


    export default {
        data() {
            return {
                WindowWidth: 0 //https://jsfiddle.net/hr77p7qb/3/ this definition seems important?
                    //WindowHeight

            }
        },

        components: {
            ppLeft: LeftComponents,
            ppRight: RightComponents,
            ppMobile: TabsMenuMobile
        },
        created() {
            this.$store.dispatch('getFirstDataYelp');
            this.WindowWidth = document.documentElement.clientWidth
        },

        mounted() {
            this.$nextTick(function() { //making the method function an async event!!
                window.addEventListener('resize', this.getWindowWidth);
                //window.addEventListener('resize', this.getWindowHeight);

                //Init
                this.getWindowWidth()
                    //this.getWindowHeight()
            })

        },

        methods: {
            getWindowWidth(event) {
                this.WindowWidth = document.documentElement.clientWidth;
                if (this.WindowWidth > 768) {
                    //    console.log(this.WindowWidth);
                    return true
                } else {
                    return false
                };
                justify - content - md - center
            }
        }

    }
    //REFERENCES:
    //--https://stackoverflow.com/a/50120217
    //--https://stackoverflow.com/a/15685819
</script>

<style scoped>
    .centered {
        margin: auto;
        width: 80%;
        border: 3px solid green;
        padding: 10px;
    }
    
    .wrapper {
        flex-direction: row;
    }
    
    #ppleftdiv {
        padding-left: 2%;
    }
    
    #pprightdiv {
        padding-right: 2%;
    }
    
    #ppleft {
        flex-direction: column;
        position: sticky;
        top: 107px;
    }
</style>