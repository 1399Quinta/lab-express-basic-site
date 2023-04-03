const express = require("express")
// const path = require("path")
const app = express()
const puerto = 3000



app.get("/", (req, res, next) => {
    res.send('Hello world')
    // res.sendFile(path.join(__dirname, "home.html"))
})
app.listen(puerto, () => {
    console.log('Mi servidor ya estamfuncionando en ${puerto}')
})
