<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/cars">Cars</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/form">Form</router-link>
      </li>
    </ul>
  </div>
</nav>
    <router-view></router-view>

  </div>
</template>

<script>

export default {

};
</script>

<style>
</style>
