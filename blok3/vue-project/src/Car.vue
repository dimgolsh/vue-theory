<template>
  <div class="car">
    <h3>Name {{carName}}</h3>
    <h3>Year {{carYear}}</h3>
    <button @click="changeName">+++</button>
    <button @click="changeFunc()">+parent++</button>
    <button @click="updateCounter">Upd</button>
  </div>
</template>

<script>
import {eventEmitter} from './main.js'

export default {
  // props: ["carName", "carYear"],
  props: {
    carName: { type: String, default:'rrrrrrr' },
    carYear: Number,
    changeFunc: Function
  },

  computed: {
    reverseName() {
      return this.carName
        .split("")
        .reverse()
        .join("");
    }
  },
  data() {
    return {};
  },
  methods:{
    changeName(){
      this.carName = 'Mazda',
      this.$emit('nameChanged',this.carName)
    },
    updateCounter(){
     // this.$emit('counterUpdated',this.counter++)
      eventEmitter.$emit('counterUpdated', 3)
    }
  }
};
</script>

<style>
.car {
  border: 1px solid black;
}
</style>
