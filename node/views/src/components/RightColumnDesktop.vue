<template>
    <div>
        <b-row id="businesscardcont">
            <!--<div class='col-md-4 businesscard' v-for="(business, index) in ydata">-->
            <div class='col-sm-12 businesscard' v-for="(business, busindex) in ydata">
                <pp-buscards :business="business" :busindex="busindex" :modal="modal" @modalstatefunc='modal = $event'></pp-buscards>
            </div>           
        </b-row>
        <b-row>
            <pp-pagination></pp-pagination>
        </b-row>
        <pp-modal v-if="modal" :modal="modal" @modalstatefunc="modal = $event"></pp-modal>
    </div>
</template>
<script>
    import BusinessCards from './HomeSub/BusinessCards.vue'
    import Pagination from './HomeSub/RightColPagination.vue'
    import Modal from './HomeSub/PlaceModal.vue'

    export default {
        data() {
            return {
                modal: false,
            }
        },

        computed: {
            ydata() {
                let places = this.$store.getters.places;
                let index = this.$store.getters.pagePlaces;
                return places.slice((index - 1) * 3, index * 3);
            }
        },
        components: {
            ppBuscards: BusinessCards,
            ppPagination: Pagination,
            ppModal: Modal
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