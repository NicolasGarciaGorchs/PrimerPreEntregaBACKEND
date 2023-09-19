const multer = require('multer')

const storage = multer.diskStorage({ //ESTE METODO ALMACENA INFORMACION
  destination: (req, file, cb) => {
    cb(null, process.cwd() + '/src/public/img')
  },
  filename: (req, file, cb) => { // CB = CALLBACK / FILENAME = NOMBRE DE ARCHIVO SUBIDO
    cb(null, file.originalname)
  },
})

const uploader = multer({ storage })

module.exports = uploader