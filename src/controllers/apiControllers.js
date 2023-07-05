import apis from '../models/apis.js';

class ApiController {
    static getAllApis = (req, res) => {
        apis.find((err, apis) => {
            res.status(200).json(apis)
            //se a resposta for sucesso traga json guardado em apis
        })
    }
    //propriedades das classes responsáveis pelas rotas
    // req: requisição, res: resposta
}

export default ApiController;