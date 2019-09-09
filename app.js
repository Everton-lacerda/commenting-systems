const express = require('express')
const app = express()

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    return res.send({ message: "Tudo ok com o método GET da rota raiz" })
})


app.listen(port, (req, res) => {
    console.log(`running API on port: ${port}`)
    console.log("To knock down press: CRTL + C")
})