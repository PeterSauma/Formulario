window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')

    //capturo los sections
    let residency=document.getElementById('residency')
    let contact=document.getElementById('contact')
    let grownup=document.getElementById('grownup')

    //capturo los botones de continuar y atras
    let btnContactContinue=document.getElementById('btnContactContinue')
    let btnContactBack=document.getElementById('btnContactBack')

    //capturo los modals
    let modalResidency=document.querySelector('.modalResidency')
    let modalContact=document.querySelector('.modalContact')
    let modalGrownup=document.querySelector('.modalGrownup')

    //capturo los contenedor
    let contenedorResidency=document.querySelector('.contenedorResidency')
    let contenedorContact=document.querySelector('.contenedorContact')
    let contenedorGrownup=document.querySelector('.contenedorGrownup')
   
    //capturo los imputs
    let phone = formulario.valueContact
    let email = formulario.email
    let webSiteCheck=document.querySelectorAll('.webSite') // type='checkbox' class='webSite'

    //capturo los errores
    let phoneErr = document.querySelector('#valueContactErr')
    let emailErr = document.querySelector('#emailErr')
    let webSiteErr = document.querySelector('#webSiteErr')
    
    //Creo las variables false para validar
    let phoneTest = false 
    let emailTest = false
    let webSite = false

    //Expresiones regulares
    let regNum = /^(?=.*[0-9])(?=(.*)).{1,}$/
    let regUpp = /^(?=.*[A-Z])(?=(.*)).{1,}$/
    let regSpecial = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{1,}$/
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;




/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES CONTACT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //Validacion telefono
    phone.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(phone.value ==''){
            phoneErr.innerText = 'Debe completar este campo'
        }else {
            phoneErr.innerText= ''
        }
    });
    phone.addEventListener('keyup', function(){
        if(!regNum.test(phone.value) || regSpecial.test(phone.value) || regUpp.test(phone.value)){
            phoneErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            phoneErr.innerText = ''
        }
    });

    //Validacion correo
    email.addEventListener('blur', () => {
        if(email.value == '') {
        emailErr.innerText = 'Debe completar este campo';
        } else if(!email.value.match(regEmail)) {
        emailErr.innerText = 'Correo inválido';
        } else {
        emailErr.innerText = '';
        }
    });

 

    /*>>>>>>>>>> botones Contact <<<<<<<<<<*/
    btnContactBack.addEventListener('click',function(){
        //Validacion telefono
        if(phone.value ==''){
            phoneErr.innerText = 'Debe completar este campo'
        }else if(!regNum.test(phone.value) || regSpecial.test(phone.value) || regUpp.test(phone.value)){
            phoneErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            phoneErr.innerText = ''
            phoneTest = true
        };
        //Validacion correo
        if(email.value == '') {
        emailErr.innerText = 'Debe completar este campo';
        } else if(!email.value.match(regEmail)) {
        emailErr.innerText = 'Correo inválido';
        } else {
        emailErr.innerText = '';
        emailTest = true
        }

        //Validacion redes sociales
        webSiteCheck.forEach((e)=>{
            if(e.checked){
                webSite= true
            }
        });
        if(!webSite){
            webSiteErr.innerText='Debe completar este campo'
        }else{
            webSiteErr.innerText=''
        };
        if(phoneTest && emailTest && webSite) {
            //delete errors
            phoneErr.innerText=''
            emailErr.innerText=''
            webSiteErr.innerText=''

            //contact donw
            contact.style.display='none'
            modalContact.style.opacity='0'
            modalContact.style.visibility='hidden'
            contenedorContact.style.transform='translateY(-30%)'
            modalContact.style.transition='all 2s ease'

            //residency up
            residency.style.display='flex'
            modalResidency.style.opacity='1'
            modalResidency.style.visibility='visible'
            contenedorResidency.style.transform='translateY(0%)'
            modalResidency.style.transition='all 2s ease'

        }

    });
    btnContactContinue.addEventListener('click',function(){
        //Validacion telefono
        if(phone.value ==''){
            phoneErr.innerText = 'Debe completar este campo'
        }else if(!regNum.test(phone.value) || regSpecial.test(phone.value) || regUpp.test(phone.value)){
            phoneErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            phoneErr.innerText = ''
            phoneTest = true
        };
        //Validacion correo
        if(email.value == '') {
        emailErr.innerText = 'Debe completar este campo';
        } else if(!email.value.match(regEmail)) {
        emailErr.innerText = 'Correo inválido';
        } else {
        emailErr.innerText = '';
        emailTest = true
        }

        //Validacion redes sociales
        webSiteCheck.forEach((e)=>{
            if(e.checked){
                webSite= true
            }
        });
        if(!webSite){
            webSiteErr.innerText='Debe completar este campo'
        }else{
            webSiteErr.innerText=''
        };
        if(phoneTest && emailTest && webSite) {
            //delete errors
            phoneErr.innerText=''
            emailErr.innerText=''
            webSiteErr.innerText=''

            //contact donw
            contact.style.display='none'
            modalContact.style.opacity='0'
            modalContact.style.visibility='hidden'
            contenedorContact.style.transform='translateY(-30%)'
            modalContact.style.transition='all 2s ease'

            //grownup up
            grownup.style.display='flex'
            modalGrownup.style.opacity='1'
            modalGrownup.style.visibility='visible'
            contenedorGrownup.style.transform='translateY(0%)'
            modalGrownup.style.transition='all 2s ease'
        }
    });
});