import express from "express"; //importando o express
import express from ("./routes/index.js");

const app = express(); // esta variável recebe o express, e 

app.use(express.json()); //framework utilizado em formato de json
app.use("/", index); //caminho para o index

export default app //exportando o app.js