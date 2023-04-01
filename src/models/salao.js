const { default: mongoose } = require('mongoose')

const Schema = mongoose.Schema

const salao = new Schema({
  nome: {
    Type: String,
    required: [true, 'Nome é obrigatório'],
  },
  foto: String,
  capa: String,
  email: {
    Type: String,
    required: [true, 'E-mail é obrigatório'],
  },
  senha: {
    Type: String,
    default: null,
  },
  telefone: String,
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
    pais: String,
  },
  geo: {
    tipo: String,
    coordinates: Array,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
})

salao.index({ geo: '2dsphere' })

module.exports = mongoose.model('Salao', salao)
