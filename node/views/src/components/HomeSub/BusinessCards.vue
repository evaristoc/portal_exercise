<template>
    <div class="card h-100">
        <img class="card-img-top" :src="business.image_url" alt="card image collar">
        <div class="card-body">
            <div>
                <h4 class="card-title">{{business.name}} <span class='pull-right'>  <button @click="openmodalfunc" class="btn btn-primary">More</button></span></h4>
            </div>
            <p class="card-text">Place {{busindex}} {{modal}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['business', 'busindex', 'modal'],
        data() {
            return {}
        },
        methods: {
            openmodalfunc() {
                this.modal = true;
                this.$emit('modalstatefunc', this.modal);
            }
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