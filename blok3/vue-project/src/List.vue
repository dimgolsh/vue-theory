<template>
<div>
    <h1>fdfd</h1>
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="(name,index) of filterNames ">{{name}}</li>
    </ul>
</div>


</template>


<script>
import ListMixin from './ListMixin'
export default {
   mixins: [ListMixin]
}
</script>
