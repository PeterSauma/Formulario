const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
//falta conexion a la API


 const controllers = {
    index: (req, res) => {
        return   res.render(path.join(__dirname,'../views/index'));
    },
    createMember: (req,res)=>{
        const errors = validationResult(req);
        

        if(errors.errors.length > 0){

            return res.render(path.join(__dirname,'../views/index'), {

                errors : errors.mapped(),
                oldData : req.body

            });
        } 
        //fetch API
        /*.then(resultado =>{
            return res.redirect('/')
        })*/
    }
 }
 module.exports=controllers
