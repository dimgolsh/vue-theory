<template>
  <div class="div">
    <h1>car id {{id}}</h1>
    <button class="btn btn-primary" @click="goBack">Back</button>
    <hr />
    <router-link class="btn btn-sm btn-default" tag="button" :to="'/car/' + id + '/full'">info</router-link>

    <router-link
    class="btn btn-sm btn-default"
    tag="button"
    :to="{name: 'carfull',params: {id: id}, query: {name: 'mazda', year: '2222'}, scroll: '#scroll'}"

    >info
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.currentRoute.params["id"],
      idr: this.$route.params["id"]
    };
  },
  beforeRouteLeave(to,from,next){
    console.log('dddddddddd')
    if(window.confirm('ddddddddddd')){
      
    }

  },
  methods: {
    goBack() {
      this.$router.push("/cars");
    }
  },
  watch: {
    $route(toR, fromR) {
      this.id = toR.params["id"];
    }
  }
};
</script>
