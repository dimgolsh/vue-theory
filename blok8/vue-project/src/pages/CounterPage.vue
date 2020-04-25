<template>
  <div class="container text-center pt-5">
    <h1>{{title}}</h1>
    <app-counter></app-counter>
    <app-actions></app-actions>
    <app-second></app-second>
  </div>
</template>

<script>
  import Counter from './Counter'
  import SecondCounter from './SecondCounter'
  import Actions from './Actions'

  export default {
    components: {
      appCounter: Counter,
      appActions: Actions,
      appSecond: SecondCounter
    },
    computed: {
      title () {
        return this.$store.getters.title
      }
    }
  }
</script>
