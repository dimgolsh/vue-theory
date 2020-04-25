<template>
  <div>
    <h4>Car {{name}} </h4>
    <h3>year : {{year}}</h3>
  </div>
</template>

<script>
export default {

  computed: {
      year(){
        return this.$route.query.year
      },
      name(){
        return this.$route.query.name
      },

  }

}
</script>

<style>

</style>
