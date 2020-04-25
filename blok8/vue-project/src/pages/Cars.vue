<template>
  <div class="container">
    <h1>Cars</h1>
    <ul>
      <router-link
      tag="li"
       v-for="car in 5"
       :to="'/car/' + car"
       :key="car"
       >
        <a>car {{car}}</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>
