<template>
    <div>
    <div class="alert alert-info">this is some info : {{modal}}</div>
    <button class="btn btn-primary" @click="closemodalfunc">CLOSE MODAL</button>
    </div>
</template>
<script>
    export default {
        props: ["modal"],
        data() {
            return {}
        },
        methods: {
            closemodalfunc() {
                this.modal = false;
                this.$emit('modalstatefunc', this.modal);
            }
        }
    }
</script>
<!--<template>
    <div>
  <b-btn v-b-modal.modal1>Launch demo modal</b-btn>
  <b-modal id="modal1" title="Bootstrap-Vue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
</template>-->