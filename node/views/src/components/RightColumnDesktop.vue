<template>
    <div>
        <b-row id="businesscardcont">
            <!--<div class='col-md-4 businesscard' v-for="(business, index) in ydata">-->
            <div class='col-sm-12 businesscard' v-for="(business, busindex) in ydata">
                <pp-buscards :business='business' :busindex='busindex'></pp-buscards>
            </div>           
        </b-row>
        <b-row>
            <pp-pagination></pp-pagination>
        </b-row>
    </div>
</template>
<script>
    import BusinessCards from './HomeSub/BusinessCards.vue'
    import Pagination from './HomeSub/RightColPagination.vue'
    export default {

        computed: {
            ydata() {
                console.log(typeof this.$store.getters.places)
                return this.$store.getters.places.slice(this.$store.getters.pagePlaces - 1, 3)
            }
        },
        components: {
            ppBuscards: BusinessCards,
            ppPagination: Pagination
        }
    }
</script>
<style scoped>
    /* resize images */
    
    #businesscardcont {
        margin-top: 107px;
    }
    
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