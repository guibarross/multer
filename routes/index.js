var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
const multer = require('multer')
const path = require('path')

const multerDiskStorage = multer.diskStorage({
    destination:(req, file, callback) => {
        const folder = path.join(__dirname,'../public/images')
        callback(null, folder)

    },
    filename: (req,filename,callback) => {
        const imageName = Date.now() + filename.originalname
        callback(null,imageName)
    }
})
const upload = multer({storage: multerDiskStorage})
router.get('/',indexController.viewCadastro)

router.post('/cadastro',upload.single('avatar'),indexController.salvarCadastro)

module.exports = router
