<template>
  <div class="container">
    <router-view></router-view>
    <form @submit.prevent="onSumbit">
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
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">uniqEmail</div>
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          v-model="password"
          :class="{'is-invalid' : $v.password.$error}"
          @input="$v.password.$touch()"
        />
        <div
          class="invalid-feedback"
          v-if="!$v.password.minLength"
        >password is {{$v.password.$params.minLength.min}} now {{password.length}}</div>
      </div>
      <div class="form-group">
        <label for="confirm">confirm password</label>
        <input
          type="password"
          id="confirm"
          class="form-control"
          v-model="confirm"
          :class="{'is-invalid' : $v.confirm.$error}"
          @input="$v.confirm.$touch()"
        />
        <div
          class="invalid-feedback"
          v-if="!$v.confirm.sameAs"
        >password is now {{password.length}}</div>
      </div>
      <button class="btn btn-primary" type="submit"
      :disabled="$v.$invalid"
      >Submut</button>
    </form>
    <pre>
    {{$v.email}}
  </pre>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirm: ''
    };
  },
  methods: {
    onSumbit(){

      console.log(this.email);
      console.log(this.password);
    }
  },
  validations: {
    email: {
      required: required,
      email,
      uniqEmail: function(newEmail){
        if (newEmail ==='') return true
        return new Promise((resolve,reject)=>{
          setInterval(()=>{
            const value = newEmail !== 'test@mail.ru';
            resolve(value)
          },3000)
        })
      }
    },
    password: {
      minLength: minLength(6)
    },
    confirm:{
      sameAs: sameAs('password')
    }
  }
};
</script>

<style>
</style>
