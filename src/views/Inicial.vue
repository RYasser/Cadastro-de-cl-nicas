<template>
<!-- Layout inicial -->
  <div class="containerInicial">
    <div class="containerApp">
      <Home class="home"/>
      <Login class="login"/>
      <Footer class="footer"/>
    </div>
    <div v-if="nome" class="register">
      <Cadastro/>
    </div>
  </div>
</template>

<script>
  import Login from "../components/Login.vue"
  import Cadastro from "../components/Cadastro.vue"
  import Home from "../components/Home.vue"
  import Footer from "../components/Footer.vue"
  import { mapState } from "vuex"

  export default {
    components: {
      Login,
      Cadastro,
      Home,
      Footer
    },
    computed: {
      ...mapState(['nome'])
    },
  }
</script>

<style>
  .containerApp {
    background-image: url("../assets/background2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .containerApp {
    display: grid;
    grid-template-columns: 700px 2fr;
    grid-template-rows: 584px 70px;
    grid-template-areas: 
      'home login'
      'footer footer'
  }

  .register {
    position: fixed;
    margin-left: 30%;
    margin-top: -50%;
  }

  .home {
    grid-area: home;
    margin-top: 14%;
    margin-left: 20%;
  }

  .login {
    grid-area: login;
    margin-top: 20%;
  }

  .footer {
    grid-area: footer;
  }
</style>
