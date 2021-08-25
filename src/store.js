import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    estados: [],
    cidades: ['teste'],
    nome: '',
    endereco: '',
    cepInvalido: '',
    estado: '',
    cidade: ''
  },
  getters: {

  },

  mutations: {
    // Altera a variável responsável pela visualização do component cadastro
    mostrarCadastro(state) {
      state.nome === '' ? state.nome = 'Cadastro' : state.nome = ''
    },
    fecharCadastro(state) {
      state.nome = ''
    },
    zerarEstados(state) {
      state.estados = []
    }
  },
  actions: {
    buscarCEP: ({ state }, payload) => {

      axios.get(`http://viacep.com.br/ws/${payload.target.value}/json/`)
        .then(response => response.data)
        .then(endereco => {
          state.endereco = endereco.logradouro
          state.estado = endereco.uf
          state.cidade = endereco.localidade

          state.cepInvalido = ''
        })
        .catch(() => {
          state.cepInvalido = 'CEP inválido.'
        })
    },
    // Requisição feita apenas depois de clicar em algum estado ja renderizado
    buscarCidade: (context, payload) => {
      context.state.estados[0].map(estado => {
        if (estado.sigla === payload.target.value) {
          axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.id}/municipios`)
            .then(response => response.data)
            .then(cidades => context.state.cidades = cidades)
        }
      })
    }
  }
})