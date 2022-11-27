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
    let celular = formulario.valueContact
    let email = formulario.email

    //capturo los errores
    let celularErr = document.querySelector('#valueContactErr')
    let emailErr = document.querySelector('#emailErr')

    //Expresiones regulares
    let regNum = /^(?=.*[0-9])(?=(.*)).{1,}$/
    let regUpp = /^(?=.*[A-Z])(?=(.*)).{1,}$/
    let regSpecial = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{1,}$/


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES CONTACT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //Validacion telefono
    celular.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(celular.value ==''){
            celularErr.innerText = 'Debe completar este campo'
        }else {
            celularErr.innerText= ''
        }
    });
    celular.addEventListener('keyup', function(){
        if(!regNum.test(celular.value) || regSpecial.test(celular.value) || regUpp.test(celular.value)){
            celularErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            celularErr.innerText = ''
        }
    });
    /*>>>>>>>>>> botones Contact <<<<<<<<<<*/
    btnContactBack.addEventListener('click',function(){
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
    });
    btnContactContinue.addEventListener('click',function(){
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
    });
});