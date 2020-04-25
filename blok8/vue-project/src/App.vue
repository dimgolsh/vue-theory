<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" exact to="/">
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cars">Cars</router-link>
          </li>

          <router-link tag="li" class="nav-item" to="/form">
            <a class="nav-link">Form</a>
          </router-link>
            <router-link tag="li" class="nav-item" to="/carsf">
            <a class="nav-link">carf</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
