import mongoose from 'mongoose';

mongoose.connect()
// A função connect guarda a string dentro dos parênteses

let db = mongoose.connection;
// Agora criamos uma variável que guarda a ação de conectar no nosso usuário com o mongoDB.

module.export = db;