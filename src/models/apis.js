import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        grupo: { type: String, require: true},
        instrumentacao: { type: Array, require: true},
        integrantes: { type: Array, require: true},
        contato: { type: String, require: true},
        detalhes: { type: Object, require: true}
    }
)

const apis = mongoose.model('apis', apiSchema);

module.exports = apis;