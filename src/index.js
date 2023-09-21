const express = require('express')
const router = require('./router/index')
const morgan = require('morgan')
const {v4: uuidv4} = require ('uuid')

const app = express()

// MIDDLEWARES
app.use(express.json()) // de terceros
app.use(express.urlencoded({ extended: true })) // de terceros
app.use(morgan('combined')) // de terceros
app.use(express.static(__dirname + '/public'))
router(app)

module.exports = app


// MIDDLEWARE DE NIVEL DE APLICACION SUELEN TENER next() AL FINAL
// MIDDLEWARE DE NIVEL DE ENDPOINT EJ: app.get('/endpoint', mid1, (req , res) => { res.json({ dato1: req.dato1 }) })
// MIDDLEWARE DE NIVEL DE ROUTER EJ: router.get('/', mid1, (req, res) => { res.json({ dato1: req.dato1 }) })
// MIDDLEWARE DE MANEJO DE ERRORES EJ: app.use(function (err, req, res, next)) { console.error(err.stack); res.status(500).send('Something broke!'); )};
// MIDDLEWARE INCORPORADO EJ: app.use(express.static('public' + options));