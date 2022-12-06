const express = require ('express');
const router = express.Router();
const path = require("path");
const multer = require('multer');
const indexController = require('../controllers/indexController')
//requerir express validator
const { body } = require('express-validator')


//middleware para guardar la imagen
const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, path.resolve(__dirname, '../../public/images/users')); 
  }, 
  filename: function (req, file, cb) { 
     cb(null, `${Date.now()}_${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}_miAlameda_${path.extname(file.originalname)}`);  } 
})
const uploadFile = multer({ storage: storage });

// Validaciones de Creacion y Edición de Producto

const validationsNewProduct = [
  
  //SECTION 1 PERSONAL
  body('firstName').notEmpty().withMessage('Tienes que ingresar tu nombre').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
  body('lastName').notEmpty().withMessage('Tienes que ingresar tu apellido').isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres'),
  body('dateOfBirthAt').notEmpty().withMessage('Debes ingresar tu cumpleaños'),
  body('sex').isIn(['hombre', 'mujer', 'noContesta']).withMessage('Por favor, seleccione una de las opciones'),
  body('relationalSituation').isIn(['soltero', 'enPareja', 'casado', 'viudo','divorciado','otro']).withMessage('Por favor, seleccione una de las opciones'),
  
  
  //SECTION 2 FAMILY
  body('coexistenceSituation').isIn(['papa','mama','tio','abuelo','conyuge','hijo','solo','otro']).withMessage('Por favor, seleccione al menos una de las opciones'),
  body('isChildren').isIn(['si','no']).withMessage('Por favor, seleccione una de las opciones'),
  
  body('isChildren').custom((value, {req})=>{
    let isChildren=req.isChildren
    if(isChildren.value=='si'){
        body('numberChildren').isNumeric().withMessage('Por favor escriba un numero').isInt({ min:0, max: 15}).withMessage('Debe ingresar un número 1 al 15'),
        body('isChildrenAttendChurch').isNumeric().withMessage('Por favor escriba un numero').isInt({ min:0, max: 15}).withMessage('Debe ingresar un número 1 al 15')
    }
    return true
  }),

  body('isBoss').isIn(['si','no']).withMessage('Por favor, seleccione una de las opciones'),
  
  body('coexistenceSituation').custom((value, {req})=>{
    let relationalSituation = req.relationalSituation
    let coexistenceSituation = req.coexistenceSituation
    let isBoss = req.isBoss
    if(relationalSituation.value=='casado' && coexistenceSituation.value=='conyuge' || relationalSituation.value=='enPareja' && coexistenceSituation.value=='conyuge' ){
        body('isChildcoupleBossren').isIn(['si','no']).withMessage('Por favor, seleccione una de las opciones')
        body('nameCouple').notEmpty().withMessage('Tienes que ingresar el nombre de tu pareja').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
        body('lastNameCouple').notEmpty().withMessage('Tienes que ingresar el apellido de tu pareja').isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres')      
    } else if (relationalSituation.value!='casado'&& coexistenceSituation.value !='conyuge' && isBoss.value=='no'|| relationalSituation.value !='enPareja' && coexistenceSituation.value !='conyuge' && isBoss.value=='no' ){
        body('whoBossName').notEmpty().withMessage('Tienes que ingresar el nombre del jefe/a de hogar').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),
        body('whoBossLastName').notEmpty().withMessage('Tienes que ingresar el apellido del jefe/a de hogar').isLength({ min: 3 }).withMessage('El apellido debe tener al menos 3 caracteres')
    }
    return true
  }),

  //SECTION 3 RESIDENCY
  body('street').notEmpty().withMessage('Tienes que ingresar tu dirección').isLength({ min: 3 }).withMessage('Escriba el nombre de la calle completo'),
  body('numeration').isNumeric().withMessage('Debe ingresar un número')
  .isInt({ min:0, max: 999999999}).withMessage('Debe ingresar una numeración correcta'),
  body('postalCode').isNumeric().withMessage('Tienes que ingresar tu código postal')
  .isLength({ min: 3 }).withMessage('Escriba el nombre del codigo postal completo'),
  body('city').notEmpty().withMessage('Tienes que ingresar tu departamento').isLength({ min: 3 }).withMessage('Escriba el nombre del departamneto completo'),
  body('state').notEmpty().withMessage('Tienes que ingresar tu provincia').isLength({ min: 3 }).withMessage('Escriba el nombre del provincia completo'),
  body('country').notEmpty().withMessage('Tienes que ingresar tu país').isLength({ min: 3 }).withMessage('Escriba el nombre del país completo'),

  //SECTION 4 CONTACT
  body('valueContact').isNumeric().withMessage('Debe ingresar un número')
  .isInt({ min:0, max: 50}).withMessage('Debe ingresar telefono correcto'),
  body('fijo').isNumeric().withMessage('Debe ingresar un número')
  .isInt({ min:0, max: 50}).withMessage('Debe ingresar telefono correcto'),
  body('email').notEmpty().withMessage('Tienes que ingresar tu email').bail()
  .isEmail(). withMessage('Ingrese un email valido'),
  body('webSite').isIn(['YouVersion','Facebook','Instagram','YouTube','Tik','Spotify','WhatsApp','Telegram','Twitter','Twitch','Discord','Pinterest','LinkedIn','Slack','Otra','Ninguna']).withMessage('Por favor, seleccione al menos una de las opciones'),

  //SECTION 5 GROWNUP
  body('timeChurch').isIn(['timeChurch-0','timeChurch-6-1','timeChurch-1-5','timeChurch-5-0']).withMessage('Por favor, seleccione una de las opciones'),
  body('liveChurch').isIn(['liveChurchPresesnce','liveChurchVirtual']).withMessage('Por favor, seleccione una de las opciones'),
  body('churchExperiences').isIn(['nuevoInicio','bautismo','paso1','paso2','paso3','paso4','vidaDiscipular1','vidaDiscipular2','vidaDiscipular3','vidaDiscipular4','seaLibre','fundamentos','celebremos','sdl','ninguno','otro']).withMessage('Por favor, seleccione al menos una de las opciones'),
  body('servicesUsed').isIn(['cafeteria','camping','escuela-musica','escuela-danza','casa-mujer','jardín','acasa','ninguno','otro']).withMessage('Por favor, seleccione al menos una de las opciones'),
  
  //SECTION 6 SMALL GORUP
  body('isParticipateSmallGroup').isIn(['si','no']).withMessage('Por favor, seleccione una de las opciones'),
  body('smallGroupGuide').custom((value, {req})=>{
    let isParticipateSmallGroup = req.isParticipateSmallGroupç
    if(isParticipateSmallGroup.value=='si'){
        body('smallGroupGuide').notEmpty().withMessage('Tienes que ingresar nombre del guía').isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')
    }
    return true
  }),

  body('enjoyMost').isIn(['compañia','amistad','comida','oración','aprender','otros']).withMessage('Por favor, seleccione al menos una de las opciones'),
  body('yourAreaInterest').isIn(['relaciones','biblia','proposito','servir','habitoss','esparcimiento','diversion','comunion','otros']).withMessage('Por favor, seleccione al menos una de las opciones'),
  body('yourNeeds').isIn(['salud','economia','familia','oracion','adicciones','equilibrioEmocional','controlEmociones','soledad','crianza','matrimonial','laboral','legal','sxual','otro']).withMessage('Por favor, seleccione al menos una de las opciones'),


  //SECTION 7 VOCATION
  body('servicesChurch').isIn(['si','no']).withMessage('Por favor, seleccione una de las opciones'),
 
  //SECTION 8 PHOTO
  body('file').custom((value, {req})=>{
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
}),
]




/* FORMULARIO */
router.get('/',indexController.index);
router.post('/createMember',validationsNewProduct,uploadFile.single("file"),indexController.createMember);

/* FINISH */
router.get('/finish',indexController.finish)


module.exports = router;
