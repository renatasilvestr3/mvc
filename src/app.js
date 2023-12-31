import express, { json } from 'express'; //importando o express
import index from './routes/index.js';
import db from './config/dbConnect.js';
import apis from './routes/api.js';

const app = express(); // esta variável recebe o express, e será usada em outros arquivos.

app.use(json()); //framework utilizado em formato de json
app.use("/", index); //caminho para o index
app.use("/apis", apis);

db.on("error", console.log.bind(console, 'Erro de Conexão'))
db.once("open", () => {
    console.log('Conexâo com o banco feita com sucesso')
});

export default app; //exportando o app.js