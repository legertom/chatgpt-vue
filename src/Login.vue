<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label>Email:</label>
        <input type="email" v-model="email" required />
        <label>Password:</label>
        <input type="password" v-model="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import firebase from '@/firebaseConfig';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
          this.$router.push('/');
        } catch (error) {
          console.error('Login error:', error);
        }
      }
    }
  };
  </script>
  