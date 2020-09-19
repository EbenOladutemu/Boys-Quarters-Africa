<template>
  <div class="row">
    <div class="col-md-6 text-center mx-auto">
      <buttton class="btn btn-primary text-uppercase" @click="goBack">Back</buttton>
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