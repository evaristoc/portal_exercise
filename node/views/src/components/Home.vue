<template>
    <div class='wrapper' style="flex-direction: row;"> {{WindowWidth}}
    <b-row  v-if="getWindowWidth()">
    <div class="col-md-8" style="padding-left:2%;">
    <pp-left style="flex-direction:column; position:sticky; top:107px;"></pp-left>
    </div>
    <div class="col-md-4" style="padding-right:2%;">
    <pp-right></pp-right>
    </div>
    </b-row>
<b-row v-else>
    <pp-mobile></pp-mobile>
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