const express = require('express')
const router = express.Router()

const user = require('../model/user')

router.get('/', (req,res)=>{
    user.find({}, (err, data) => {
        if(err){
            return res.send({ error: 'Erro na Consulta'})
        }
        return res.send(data)
    } ) 
})
router.post('/create', (req,res)=>{
    user.findById(req.body._id, (err, data) => {
        user.create(req.body, (err, data) => {
            if (err) {
                res.send({ error: 'Erro ao Criar Vaga' })
            } else {
                return res.send(data)
            }
        })
        if (err) {
            return res.json({ error: 'Vaga já registrado!' })
        } else if (data) {
            return res.send(data)
        } else {
            
        }
    })
})

module.exports = router