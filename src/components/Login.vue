<template>
  <div class="containerLogin">
    <form class="containerForm">
      <input type="text" placeholder="Email" class="inpt email">
      <input type="password" placeholder="Senha" class="inpt senha">
      <!-- Click para a renderização do component de cadastro -->
      <a class="linkCadastro" href="#" @click="chamarCadastro">Cadastre-se</a>
      <button class="btnLogar">Entrar</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

export default {
  methods: {
    ...mapMutations(['mostrarCadastro']),
    chamarCadastro() {
      // Chama a renderização do component de Cadastro
      this.$store.commit('mostrarCadastro', this.$root.$el.style)
    }
  },
}
</script>

<style scoped>
  .containerForm {
    display: flex;
    flex-direction: column;
    height: 12rem;
    width: 22rem;
    background-color: #E6E6FA;
    background: rgba(255, 255, 255, .3);
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
    padding: 30px;
  }

  .inpt {
    margin-top: 10px;
    width: 240px;
    height: 35px;
  }

  .btnLogar {
    margin-top: 20px;
    width: 180px;
    height: 40px;
    background: rgba(255, 255, 255, .2);
    border-radius: 4px;
  }

  .inpt, .btnLogar { 
    margin-left: 50px; 
  }

  .cadastro {
    margin-top: 10px;
    margin-left: 50px;
  }

  .linkCadastro {
    margin-left: 50px;
    margin-top: 20px;
  }
</style>