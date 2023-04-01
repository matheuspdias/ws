const { default: mongoose } = require('mongoose')

const Schema = mongoose.Schema

const cliente = new Schema({
  name: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    enum: ['M', 'F'],
    required: true,
  },
  dataNascimento: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true, // YYYY-MM-DD
  },
  status: {
    type: String,
    enum: ['A', 'I'],
    required: true,
    default: 'A',
  },
  documento: {
    tipo: {
      type: String,
      enum: ['individual', 'corporation'],
      required: true,
    },
    numero: {
      type: String,
      required: true,
    },
  },
  endereco: {
    cidade: String,
    uf: String,
    cep: String,
    numero: String,
    pais: String,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Cliente', cliente)
