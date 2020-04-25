<template>
  <div>
    <app-counter></app-counter>
    <hr>
    <h1 v-colored>{{ carName }}</h1>
    <hr>

    <app-car
    :carName="carName"
    :carYear="carYear"
    :changeFunc = 'changeNameToAudi'
    @nameChanged="carName = $event"
    @counterUpdated = "counter = $event"
    >
    <h1 slot="title">{{ carName }}</h1>
    <h2 slot="body">Body</h2>

    </app-car>
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
