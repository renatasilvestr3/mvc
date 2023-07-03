import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        grupo: {type: String, require: true},
        instrumentacao: {type: String, require: true},
        integrantes: {type: String, require: true},
        contato: {type: String, require: true}
    }
)

const apis = mongoose.model('apis', apiSchema);

module.exports = apis;