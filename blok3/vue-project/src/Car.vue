<template>
  <div class="car">
    <h3>Name {{carName}}</h3>
    <h3>Year {{carYear}}</h3>
    <button @click="changeName">+++</button>
  </div>
</template>

<script>
export default {
  // props: ["carName", "carYear"],
  props: {
    carName: { type: String, default:'rrrrrrr' },
    carYear: Number
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
    }
  }
};
</script>

<style>
.car {
  border: 1px solid black;
}
</style>
