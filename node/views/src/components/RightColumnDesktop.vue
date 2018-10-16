<template>
        <div class='row'>
        <!--<div class='col-md-4 businesscard' v-for="(business, index) in ydata">-->
            <div class='col-sm-12 businesscard' v-for="(business, busindex) in ydata">
                <pp-buscards :business='business' :busindex='busindex'></pp-buscards>

          </div>           
    </div>
    </div>
</template>
<script>
    import BusinessCards from './HomeSub/BusinessCards'
    export default {
        computed: {
            ydata() {
                return this.$store.getters.places
            }
        },
        components: {
            ppBuscards: BusinessCards
        }
    }
</script>
<style scoped>
    /* resize images */
    
    .businesscard {
        /*margin: 3px 3px 20px 3px;*/
        margin-top: 5px;
        margin-bottom: 20px;
        min-height: 300px;
        overflow: auto;
    }
    
    img {
        width: 100%;
        height: 200px;
    }
    
    .btn {
        border-radius: 8px;
    }
</style>