<template>
  <div class="containerCadastro">

    <p class="fechar" @click="fecharCadastro">Fechar</p>

    <form method="POST" class="formCadastro">

      <h2 class="titulo">Cadastro</h2>

      <input placeholder="Email" type="email" class="inptCadastro">

      <input placeholder="Senha"  type="password" class="inptCadastro">

      <div class="inptCadastro">
        Data de Nascimento: <input type="date" class="inptData">
      </div>

      <input type="text" placeholder="CPF" class="inptCadastro cpf">

      <input type="text" placeholder="RG" class="inptCadastro rg">

      <div class="inptCadastro">
        Sexo:
        Masculino <input type="radio" name="sexo" value="m"> 
        Feminino <input type="radio" name="sexo" value="f">
      </div>

      <input @blur="buscarCEP" type="text" placeholder="CEP" class="inptCadastro cep">
      <!-- Caso o cep seja inválido, será renderizado -->
      <strong v-if="cepInvalido" class="inptCadastro">{{cepInvalido}}</strong>

      <div class="inptCadastro">
        Estado: 
        <select>
          <option></option>
          <!-- Renderiza os UFs que estão armazenados no array do Vuex -->
          <option v-if="estado" selected>{{estado}}</option>
          <option v-for="(uf, i) in estados[0]" :key="i" :value="uf.sigla" @click="buscarCidade">{{uf.sigla}}</option>
        </select>

        Cidade:
        <select>
          <option></option>
          <option v-if="cidade" selected>{{cidade}}</option>
          <!-- Renderiza os cidades que estão armazenados no array do Vuex -->
          <option v-for="(cidade, i) in cidades" :key="i" :value="cidade.nome">{{cidade.nome}}</option>
        </select>
      </div>
      <input :value="endereco" type="text" class="inptCadastro" placeholder="Endereço">

      <div class="inptCadastro">
        Clínica:
        <select>
          <option>Clínica 1 São José dos Campos</option>
        </select>
      </div>

      <button class="btnCadastrar">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"
import axios from "axios"

export default {
  // realiza a requisição dos estados e armazena no state de estados
  created() {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.data)
      .then(estados => {
        this.estados.push(estados)
      })
  },
  // Deixa o foco na janela de cadastro e bloqueia o click em outras partes
  mounted() {
    this.$root.$el.children[0].children.forEach(e => {
      e.style.opacity = '0.2'
      e.style.pointerEvents = 'none'
    })

    this.$el.parentNode.style.opacity = '1'
    this.$el.parentNode.style.pointerEvents = 'auto'
  },
  // Retorna o layout padrão
  destroyed() {
    this.$root.$el.children[0].children.forEach(e => {
      e.style.opacity = '1'
      e.style.pointerEvents = 'auto'

    })
  },
  computed: {
    ...mapState([
      'endereco',
      'cepInvalido',
      'estado',
      'cidade',
      'estados',
      'cidades'
    ]),
  },
  methods: {
    ...mapMutations(['fecharCadastro']),
    ...mapActions([
      'buscarCEP',
      'buscarCidade'
    ])
  }
}
</script>

<style scoped>
  .formCadastro {
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 530px;
    background-color: #E6E6FA;
    overflow: auto;
  }

  .inptCadastro {
    margin-top: 12px;
    margin-left: 40px;
    width: 400px;
    height: 80px;
  }

  .btnCadastrar {
    width: 100px;
    margin-top: 10px;
    margin-left: 40px;
    height: 120px;
  }

  .fechar {
    color: red;
    margin-left: 80%;
  }

  .titulo {
    margin-top: 20px;
    margin-left: 40px;
  }

  .inptData {
    width: 112px;
  }

  .cpf, .rg, .cep {
    width: 160px;
  }
</style>