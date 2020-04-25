<template>
  <div>
    <app-counter></app-counter>
    <hr>
    <h1 v-colored:background.font="'red'">{{ carName }}</h1>
    <h1 v-colored:color="'green'">{{ carName }}</h1>
    <h1 v-colored:color="'green'">{{ carName | lowerCase }}</h1>
    <h1 v-colored:color="'green'">{{ carName | uppercase | add }}</h1>

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
    <hr>
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="(name,index) of filterNames ">{{name}}</li>
    </ul>
    <hr>
    <app-list></app-list>
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
      names: ['Vlas', 'Max', 'Elena','Igor'],
      searchName: ''
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
  },
  directive:{

  },
  filters: {
    lowerCase(value){
      return value.toLowerCase()
    }
  },
  computed:{
    filterNames(){
      return this.names.filter(name=>{
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
};
</script>

<style>
</style>
