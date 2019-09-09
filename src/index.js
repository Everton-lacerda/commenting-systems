const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    return res.send({ message: "GET da rota raiz" })
})

router.post('/', (req,res)=>{
    return res.send({message: "POST da rota raiz"})
})

module.exports = router