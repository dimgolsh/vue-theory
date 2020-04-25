<template>
  <div>
    <h4>Car {{name}} </h4>
    <h3>year : {{year}}</h3>
    <div class="scroll">

    </div>
    <h6 id="scroll">ffffff</h6>
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
.scroll{
  height: 800px;
  background-color: blue;
}
</style>
