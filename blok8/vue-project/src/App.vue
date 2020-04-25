<template>
<div class="container">
  <form action="">
  <div class="form-group">
    <label for="email">Emau</label>
    <input
     type="email"
    id="email"
    class="form-control"
    v-model="email"
    @input="$v.email.$touch()"
    >
  </div>
  </form>
  <pre>
    {{$v.email}}
  </pre>

</div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data(){
    return {
      email: ''
    }
  },
  validations: {
    email: {
     required: required,
     email
    }
  }

}
</script>

<style>
</style>
