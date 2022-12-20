<template>
  <div class="Navbar">
    <nav id="nav" class="navbar navbar-expand-lg mb-5" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <router-link class="navbar-brand active" to="/">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/about">About</router-link>
          </li>
          <li class="nav-item">
           <router-link class="nav-link active" to="/profile">Profile</router-link>
          </li>
          <li class="nav-item">
           <router-link class="nav-link active" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
           <router-link class="nav-link active" to="/logout">Logout</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
