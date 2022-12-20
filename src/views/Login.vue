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
      this.$store.commit("login", "abc123");
      this.$router.push("/profile")
    },
  },
};
</script>
