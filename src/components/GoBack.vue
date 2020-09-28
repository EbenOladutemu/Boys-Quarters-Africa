<template>
  <div class="row">
    <div class="col-md-6 text-center mx-auto">
      <button class="btn btn-primary text-uppercase" @click="goBack">Back</button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goBack(){
      history.back();
    }
  }
}
</script>

<style>

</style>