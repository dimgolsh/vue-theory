<template>
  <div class="container">
    <form action>
      <div class="form-group">
        <label for="email">Emau</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="email"
          :class="{'is-invalid' : $v.email.$error}"
          @input="$v.email.$touch()"
        />
        <div class="invalid-feedback" v-if="!$v.email.required">dddddd</div>
        <div class="invalid-feedback" v-if="!$v.email.email">dddddd</div>
      </div>
    </form>
    <pre>
    {{$v.email}}
  </pre>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: ""
    };
  },
  validations: {
    email: {
      required: required,
      email
    }
  }
};
</script>

<style>
</style>
