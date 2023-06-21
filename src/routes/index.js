import express from 'express'

const router = express.Router //função para criação de rotas do express

router.length("/", function(req,res){
    res.status(200).send({
        title: "Bem vindas a turma Devas do Full Stack!", version
    })
})