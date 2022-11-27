window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')

    //capturo los sections
    let welcome=document.getElementById('welcome')
    let personal=document.getElementById('personal')
    let family=document.getElementById('family')

    //capturo los botones de continuar y atras
    let btnPersonalBack=document.getElementById('btnPersonalBack')
    let btnPersonalContinue=document.getElementById('btnPersonalContinue')

    //capturo los modals
    let modalWelcome=document.querySelector('.modalWelcome')
    let modalPersonal=document.querySelector('.modalPersonal')
    let modalFamily=document.querySelector('.modalFamily')
  
    //capturo los contenedor
    let contenedorWelcome=document.querySelector('.contenedorWelcome')
    let contenedorPersonal=document.querySelector('.contenedorPersonal')
    let contenedorFamily=document.querySelector('.contenedorFamily')

    //capturo los imputs
    let firstName=formulario.firstName
    let lastName=formulario.lastName
    let dateOfBirthAt=formulario.dateOfBirthAt
    let sexCheck=document.querySelectorAll('.sex') // type='radio' class='sex'
    let relationalSituationCheck=document.querySelectorAll('.relationalSituation') // type='radio' class='relationalSituation'

    //capturo los errores
    let firstNameErr = document.querySelector('#firstNameErr')
    let lastNameErr = document.querySelector('#lastNameErr')
    let sexErr = document.querySelector('#sexErr')
    let relationalSituationErr = document.querySelector('#relationalSituationErr')
    let dateOfBirthAtErr = document.querySelector('#dateOfBirthAtErr')

    //Creo las variables false para validar
    let nombre = false
    let apellido = false
    let sex = false
    let relationalSituation = false
    let dateBirth = false

    //Expresiones regulares
    let regNum = /^(?=.*[0-9])(?=(.*)).{1,}$/
    let regUpp = /^(?=.*[A-Z])(?=(.*)).{1,}$/
    let regSpecial = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{1,}$/

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES PERSONAL <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    //Validacion del nombre
    firstName.addEventListener('keyup', function(){
        if(regNum.test(firstName.value)){
            firstNameErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(firstName.value)){
            firstNameErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(firstName.value) ){
            firstNameErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            firstNameErr.innerText = ''
        }
    });
    firstName.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(firstName.value ==''){
            firstNameErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(firstName.value.length<3){
            firstNameErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            firstNameErr.innerText= ''
        }
    });
    
    //Validacion del apellido
    lastName.addEventListener('keyup', function(){
        if(regNum.test(lastName.value)){
            lastNameErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(lastName.value)){
            lastNameErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(lastName.value) ){
            lastNameErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            lastNameErr.innerText = ''
        }
    })
    lastName.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(lastName.value ==''){
            lastNameErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 3 está mal
        if(lastName.value.length<3){
            lastNameErr.innerText = 'El apellido debe tener 3 caracteres mínimo'
        } else {
            lastNameErr.innerText = ''
        }
    });
    lastName.addEventListener('keyup', function(){
        if (firstName.value.includes('Pablo') && lastName.value.includes('Infante')){
            alert ('cuñado, lamento decirte que estas excomulgado y no podés continuar con el formulario')
        } else if (firstName.value.includes('pablo') && lastName.value.includes('infante')){
            alert ('cuñado, lamento decirte que estas excomulgado y no podés continuar con el formulario')
        } else if (firstName.value.includes('Pablo') && lastName.value.includes('infante')){
            alert ('cuñado, lamento decirte que estas excomulgado y no podés continuar con el formulario')
        } else if (firstName.value.includes('pablo') && lastName.value.includes('Infante')){
            alert ('cuñado, lamento decirte que estas excomulgado y no podés continuar con el formulario')
        }
    });

    //Validación de cumpleaños
    dateOfBirthAt.addEventListener("change", function() {
        dateBirth=true
        dateOfBirthAtErr.innerText = ''
        if (firstName.value.includes('Pablo') && lastName.value.includes('Infante')){
            alert ('tenés 10 años más mentiroso!')
        } else if (firstName.value.includes('pablo') && lastName.value.includes('infante')){
            alert ('tenés 10 años más mentiroso!')
        } else if (firstName.value.includes('Pablo') && lastName.value.includes('infante')){
            alert ('tenés 10 años más mentiroso!')
        } else if (firstName.value.includes('pablo') && lastName.value.includes('Infante')){
            alert ('tenés 10 años más mentiroso!')
        }
    });

    /*>>>>>>>>>> botones Personal <<<<<<<<<<*/
    btnPersonalBack.addEventListener('click',function(){
        //Valido los inputs para bloquear el boton si no pasan los test
        //Valido el nombre
        if(firstName.value ==''){
            firstNameErr.innerText = 'Debe completar este campo'
        } else if(firstName.value.length<3){
            firstNameErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else if(regNum.test(firstName.value)){
            firstNameErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(firstName.value)){
            firstNameErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(firstName.value) ){
            firstNameErr.innerText = 'Debe iniciar con mayuscula'
        } else { 
            nombre = true
            firstNameErr.innerText = ''
        }
        //Valido el apellido
        if(lastName.value ==''){
            lastNameErr.innerText = 'Debe completar este campo'
        } else if(lastName.value.length<3){
            lastNameErr.innerText = 'El apellido debe tener 3 caracteres mínimo'
        }else if(regNum.test(lastName.value)){
            lastNameErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(lastName.value)){
            lastNameErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(lastName.value) ){
            lastNameErr.innerText = 'Debe iniciar con mayuscula'
        } else { 
            apellido = true
            lastNameErr.innerText = ''
        }
        //Valido el cumpleaños
        if(!dateBirth){
            dateOfBirthAtErr.innerText = 'Debe completar este campo'
        }
        //Valido el género
        sexCheck.forEach((e)=>{
            if(e.checked){
                sex= true
            }
        })
        if(!sex){
            sexErr.innerText = 'Debe completar este campo'
        } else { sexErr.innerText = ''}
        //Valido la relaciones
        relationalSituationCheck.forEach((e)=>{
            if(e.checked){
                relationalSituation= true
            }
        })
        if(!relationalSituation){
            relationalSituationErr.innerText = 'Debe completar este campo'
        } else {relationalSituationErr.innerText =''}
        //Si todo está ok pasa
        if (nombre && apellido && dateBirth && sex && relationalSituation) {

            //delete errors
            firstNameErr.innerText = ''
            lastNameErr.innerText = ''
            dateOfBirthAtErr.innerText = ''
            sexErr.innerText = ''
            relationalSituationErr.innerText = ''

            //welcome up
            welcome.style.display='flex'
            modalWelcome.style.opacity='1'
            modalWelcome.style.visibility='visible'
            contenedorWelcome.style.transform='translateY(0%)'
            modalWelcome.style.transition='all 2s ease'
            
            //personal donw
            personal.style.display='none'
            modalPersonal.style.opacity='0'
            modalPersonal.style.visibility='hidden'
            contenedorPersonal.style.transform='translateY(-30%)'
            modalPersonal.style.transition='all 2s ease'
        }
    });
    btnPersonalContinue.addEventListener('click',()=>{
        //Valido los inputs para bloquear el boton si no pasan los test
        //Valido el nombre
        if(firstName.value ==''){
            firstNameErr.innerText = 'Debe completar este campo'
        } else if(firstName.value.length<3){
            firstNameErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else if(regNum.test(firstName.value)){
            firstNameErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(firstName.value)){
            firstNameErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(firstName.value) ){
            firstNameErr.innerText = 'Debe iniciar con mayuscula'
        } else { 
            nombre = true
            firstNameErr.innerText = ''
        }
        //Valido el apellido
        if(lastName.value ==''){
            lastNameErr.innerText = 'Debe completar este campo'
        } else if(lastName.value.length<3){
            lastNameErr.innerText = 'El apellido debe tener 3 caracteres mínimo'
        }else if(regNum.test(lastName.value)){
            lastNameErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(lastName.value)){
            lastNameErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(lastName.value) ){
            lastNameErr.innerText = 'Debe iniciar con mayuscula'
        } else { 
            apellido = true
            lastNameErr.innerText = ''
        }
        //Valido el cumpleaños
        if(!dateBirth){
            dateOfBirthAtErr.innerText = 'Debe completar este campo'
        }
        //Valido el género
        sexCheck.forEach((e)=>{
            if(e.checked){
                sex= true
            }
        })
        if(!sex){
            sexErr.innerText = 'Debe completar este campo'
        } else { sexErr.innerText = ''}
        //Valido la relaciones
        relationalSituationCheck.forEach((e)=>{
            if(e.checked){
                relationalSituation= true
            }
        })
        if(!relationalSituation){
            relationalSituationErr.innerText = 'Debe completar este campo'
        } else {relationalSituationErr.innerText =''}
        //Si todo está ok pasa
        if (nombre && apellido && dateBirth && sex && relationalSituation) {
            //delete errors
            firstNameErr.innerText = ''
            lastNameErr.innerText = ''
            dateOfBirthAtErr.innerText = ''
            sexErr.innerText = ''
            relationalSituationErr.innerText = ''

            //personal donw
            personal.style.display='none'
            modalPersonal.style.opacity='0'
            modalPersonal.style.visibility='hidden'
            contenedorPersonal.style.transform='translateY(-30%)'
            modalPersonal.style.transition='all 2s ease'

            //family up
            family.style.display='flex'
            modalFamily.style.opacity='1'
            modalFamily.style.visibility='visible'
            contenedorFamily.style.transform='translateY(0%)'
            modalFamily.style.transition='all 2s ease'
            }
    });
});