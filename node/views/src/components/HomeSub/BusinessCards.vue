<template>
    <div class="card h-100">
    <img class="card-img-top" :src="business.image_url" alt="card image collar">
    <div class="card-body">
        <div><h4 class="card-title">{{business.name}} <span class='pull-right'>  <button v-on:click="addProductToCart(product)" class="btn btn-primary">Add To Cart</button></span></h4></div>
        <p class="card-text">Place {{busindex}}</p>
    </div>
    </div>
</template>
<script>
    export default {
        props: ['business', 'busindex']
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