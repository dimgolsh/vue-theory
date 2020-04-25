<template>
  <div class="car">
    <slot name="title"></slot>
    <h3>Name {{carName}}</h3>
    <h3>Year {{carYear}}</h3>
    <button @click="changeName">changeName</button>
    <button @click="changeFunc()">changeFunc</button>
    <slot name="body"></slot>
    <button @click="updateCounter">Upd updateCounter</button>
  </div>
</template>

<script>
import { eventEmitter } from "./main.js";

export default {
  // props: ["carName", "carYear"],
  props: {
    carName: { type: String, default: "rrrrrrr" },
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
  methods: {
    changeName() {
      (this.carName = "Mazda"), this.$emit("nameChanged", this.carName);
    },
    updateCounter() {
      // this.$emit('counterUpdated',this.counter++)
      eventEmitter.$emit("counterUpdated", 3);
    }
  }
};
</script>

<style scoped>
.car {
  border: 1px solid black;
}
</style>
