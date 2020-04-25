<template>
  <h1>car id {{id}}</h1>
</template>

<script>
export default {
  data(){
    return {
      id: this.$router.currentRoute.params['id'],
      idr: this.$route.params['id']
    }
  },
  watch:{
    $route (toR, fromR){
      this.id = toR.params['id']
    }
  }
}
</script>
