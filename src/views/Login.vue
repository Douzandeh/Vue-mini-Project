<template>
  <div class="Login">
    <h1>Login</h1>
    <button class="btn btn-success" @click="doLogin">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    doLogin() {
      this.$store.commit("Login", "abc123");
    },
  },
};
</script>
