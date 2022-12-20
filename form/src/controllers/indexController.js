const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
const db = require("../database/models");



 const controllers = {
    index: (req, res) => {
        return   res.render(path.join(__dirname,'../views/index'));
    },
    createMember: /*async*/ function (req,res) {
        //Valido que no se suban dos veces los datos del mismo miembro. Para esto valido el nombre, apellido, fecha de nacimiento, mail y télefono
        //capturo los inputs que viajan por el body
        let bodyName = req.body.firstName;
        let bodyLastName = req.body.lastName;
        let bodyBirthday = req.body.dateOfBirthAt;
        let bodyPhone = req.body.valueContact;
        let bodyEmail = req.body.email

        //genero una constante user y esta será nula si no coinciden con los datos que viajan por el body
        /*let user = await db.Miembro.findOne({
        where: {   
            name: bodyName,
            lastName: bodyLastName,
            dateOfBirthday:bodyBirthday},
        }).then((user) => {
        return user;
        });

        //genero una constante contact y esta será nula si no coinciden con los datos que viajan por el body
        let contact = await db.Contacto.findOne({
        where: {   
            phone: bodyPhone,
            email: bodyEmail},
        }).then((contact) => {
        return contact;
        });

        //si los datos ya fueron registrados el if me va a dar true, renderizo la vista del formulario con un alert con la leyenda de que ya esta registrado
        if (user && contact) {
        return res.render("../views/index", alert ('el usuario que intenta registrar ya existe'));
        }

        //Valido desde el back que no hayan errores al completar el formulario
        const errors = validationResult(req);
        if(errors.errors.length > 0){

            return res.render(path.join(__dirname,'../views/index'), {

                errors : errors.mapped(),
                oldData : req.body

            }, alert('debe completar correctamente el formulario'));
        } */

        //Tabla DisfrutaGrupo
        //Creo las variables de los checkbox
 
        .then(resultado =>{
            db.Miembros.create(
                {
                    name: req.body.firstName,
                    lastName: req.body.lastName,
                    dateOfBirthday: req.body.dateOfBirthAt,
                    sex: req.body.sex,
                    relationalSituation: req.body.relationalSituation,
                    pathPhoto: req.file.filename,
           })
        })
       .then(resultado =>{

           return res.redirect('../views/finish')
       })

      /* db.Trabajos.create(
        {
            profession: req.body.profession,
            lastJob: req.body.lastJob,
            artisticSkills: req.body.artist
        })
        res.redirect('../views/finish')
        .catch (function(error){
            alert(error)
        })*/

        
    },
    finish: (req, res) => {
        return   res.render(path.join(__dirname,'../views/finish'));
    },
 }
 module.exports=controllers
