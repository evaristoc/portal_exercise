<template>
    <div>{{ydata}}</div>
</template>
<script>
    export default {
        computed: {
            ydata() {
                return this.$store.getters.places
            }
        },
        created() {
            this.$store.dispatch('getFirstDataYelp')
        }
    }
</script>