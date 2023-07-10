import mongoose from "mongoose";

const apiScheema = new mongoose.Schema(
    {
        grupo: { type: String, require: true},
        instrumentacao: { type: Array, require: true},
        integrantes: { type: Array, require: true},
        contato: { type: String, require: true},
        detalhes: { type: Object, require: true}
    }
);

const apis = mongoose.model("apis", apiScheema);

export default apis;