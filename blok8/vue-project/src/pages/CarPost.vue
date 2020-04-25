<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName" />
    </div>

    <div class="form-group">
      <label for="year">Car year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear" />
    </div>

    <button class="btn btn-success" @click="createCar">Create car</button>
    <button class="btn btn-primary" @click="getCars">GET</button>
    <ul>
      <li v-for="car of cars" :key="car.name">
        {{car.name}}
        {{car.year}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carName: "",
      carYear: 2018,
      cars: []
    };
  },
  methods: {
    createCar() {
      const car = {
        name: this.carName,
        year: this.carYear
      };

      this.$http
        .post("http://localhost:3000/cars", car)
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(newCar => {
          console.log(newCar);
        });

        this.resource.save({},car)
    },
    getCars() {
      this.$http
        .get("cars")
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(newCar => {
          console.log(newCar);
          this.cars = newCar
        });
        this.resource.get().then(res=>res.json()).then(cars=>this.cars=cars)

    }
  },
  created(){
    this.resource = this.$resource('cars')
  }
};
</script>
