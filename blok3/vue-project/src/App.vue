<template>
  <div>
    <app-counter></app-counter>
    <hr />
    <h1 v-colored:background.font="'red'">{{ carName }}</h1>
    <h1 v-colored:color="'green'">{{ carName }}</h1>
    <h1 v-colored:color="'green'">{{ carName | lowerCase }}</h1>
    <h1 v-colored:color="'green'">{{ carName | uppercase | add }}</h1>

    <hr />

    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
      @counterUpdated="counter = $event"
    >
      <h1 slot="title">{{ carName }}</h1>
      <h2 slot="body">Body</h2>
    </app-car>
    <hr />
    <input type="text" v-model="searchName" />
    <ul>
      <li v-for="(name,index) of filterNames ">{{name}}</li>
    </ul>
    <hr />
    <app-list></app-list>
    <hr />
    <textarea v-model="carName"></textarea>
    <hr />
    <label>
      <input type="checkbox" value="instagram" v-model="social" />instagram
    </label>
    <label>
      <input type="checkbox" value="facebook" v-model="social" />facebook
    </label>
    <label>
      <input type="checkbox" value="vk" v-model="social" />vk
    </label>

    <hr />
    <ul>
      <li v-for="s in social">{{s}}</li>
    </ul>
    <hr />
    <hr />
    <label>
      <input type="radio" value="instagram" v-model="socialrad" />instagram
    </label>
    <label>
      <input type="radio" value="facebook" v-model="socialrad" />facebook
    </label>
    <label>
      <input type="radio" value="vk" v-model="socialrad" />vk
    </label>
    <p>{{socialrad}}</p>
    <hr />
    <hr />
    <select v-model="socialSelectOne">
      <option v-for="s in socialSelect" :selected="s === defaultSelect">{{s}}</option>
    </select>
    <p>{{socialSelectOne}}</p>
    <hr>
    <input type="text" v-model.number="age">
    <p>{{age}}</p>
    <hr>
    <app-onoff v-model="switched" ></app-onoff>
    <h3 v-if="switched">Enable</h3>
    <h3 v-else-if="!switched">Disabel</h3>
  </div>
</template>

<script>
import Car from "./Car.vue";
import Counter from "./Counter.vue";

export default {
  data() {
    return {
      carName: "Ford from parent",
      carYear: 2018,
      names: ["Vlas", "Max", "Elena", "Igor"],
      searchName: "",
      social: [],
      age: 20,
      socialrad: "",
      socialSelect: ["instagram", "facebook", "vk"],
      defaultSelect: "facebook",
      socialSelectOne: 'facebook',
      switched: false
    };
  },
  components: {
    appCar: Car,
    appCounter: Counter
  },
  methods: {
    changeNameToAudi() {
      this.carName = "Auid";
    }
  },
  directive: {},
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  computed: {
    filterNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
      });
    }
  }
};
</script>

<style scoped>
p {
  white-space: pre;
}
</style>
