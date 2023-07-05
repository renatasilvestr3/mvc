import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:almenara158@cluster0.wento82.mongodb.net/senac2")
// A função connect guarda a string dentro dos parênteses

let db = mongoose.connection;
// Agora criamos uma variável que guarda a ação de conectar no nosso usuário com o mongoDB.

export default db;