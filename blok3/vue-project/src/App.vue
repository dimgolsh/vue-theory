<template>
  <div>
    <app-counter></app-counter>
    <h1>{{ carName }}</h1>
    <app-car
    :carName="carName"
    :carYear="carYear"
    :changeFunc = 'changeNameToAudi'
    @nameChanged="carName = $event"
    @counterUpdated = "counter = $event"
    ></app-car>
  </div>
</template>

<script>
import Car from './Car.vue';
import Counter from './Counter.vue';

export default {
  data() {
    return {
      carName: "Ford from parent",
      carYear: 2018,
    };
  },
  components: {
    appCar: Car,
    appCounter: Counter
  },
  methods: {
    changeNameToAudi(){
      this.carName = 'Auid'
    }
  }
};
</script>

<style>
</style>
