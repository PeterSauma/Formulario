const express = require ('express');
const router = express.Router();
const path = require("path");
const multer = require('multer');

const indexController = require('../controllers/indexController')

//requerir express validator
const { body } = require('express-validator')

//middeware para guardar la imagen
const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, path.resolve(__dirname, '../../public/images/products')); 
  }, 
  filename: function (req, file, cb) { 
     cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
})


// Validaciones de Creacion y Edición de Producto

const validationsNewProduct = [
  
  //SECTION 1 PERSONAL
  body('firstName').notEmpty().withMessage('Tienes que ingresar tu nombre')
  .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
  body('lastName').notEmpty().withMessage('Tienes que ingresar tu apellido')
  .isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres'),
  body('dateOfBirthAt').notEmpty().withMessage('Debes ingresar tu cumpleaños'),
  body('sex').isIn(['hombre', 'mujer', 'noContesta']).withMessage('Por favor, seleccionar una de las opciones'),
  body('relationalSituation').isIn(['soltero', 'enPareja', 'casado', 'viudo','divorciado','otro']).withMessage('Por favor, seleccionar una de las opciones'),
  
  
  //SECTION 2 FAMILY

  /*body('lastName').isLength({ min: 3 }).withMessage('Deberá tener al menos 20 caracteres'),
  body('price').notEmpty().withMessage('Debes ingresar un precio')
  .isFloat({ min:1}).withMessage('el precio no puede ser 0'),
  body('discount').notEmpty().withMessage('Si no aplica descuento, escribir 0')
  .isInt({ min:0, max: 95}).withMessage('El descuento debe ser un número entre 0 y 95'),
  body('category').isIn(['phones', 'tablets', 'laptops']).withMessage('Por favor, seleccionar una de las opciones'),
  body('brand').isIn(["Iphone","Apple","Samsung", "Motorola", "Huawei", "OnePlus", "Xiaomi"]).withMessage('Por favor, seleccionar una de las opciones'),
  body('section').isIn(["lo mas buscado", "celulares", "laptops", "tablets"]).withMessage('Por favor, seleccionar una de las opciones'),
  body('images').custom((value, {req})=>{
      let file = req.file
      let acceptedExtensions = ['.jpg','.jpeg', '.png', '.gif']
      if(!file){
          throw new Error ('Tienes que subir una imagen')
      }

      else{

          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)){
   
              throw new Error (`Las extensiones de archivo permitidas son  ${acceptedExtensions.join(' , ')}`);
          }
      }
      return true
  })*/
]




/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
