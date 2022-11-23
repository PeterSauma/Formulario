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

    //capturo los errores

    //Creo las variables false para radio y checkbox

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES CONTACT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /*>>>>>>>>>> botones Contact <<<<<<<<<<*/
    btnContactBack.addEventListener('click',function(){
        //contact donw
        contact.style.display='none'
        modalContact.style.opacity='0'
        modalContact.style.visibility='hidden'
        contenedorContact.style.transform='translateY(-30%)'
        modalContact.style.transition='all 500ms ease'

        //residency up
        residency.style.display='flex'
        modalResidency.style.opacity='1'
        modalResidency.style.visibility='visible'
        contenedorResidency.style.transform='translateY(0%)'
        modalResidency.style.transition='all 500ms ease'
    });
    btnContactContinue.addEventListener('click',function(){
        //contact donw
        contact.style.display='none'
        modalContact.style.opacity='0'
        modalContact.style.visibility='hidden'
        contenedorContact.style.transform='translateY(-30%)'
        modalContact.style.transition='all 500ms ease'

        //grownup up
        grownup.style.display='flex'
        modalGrownup.style.opacity='1'
        modalGrownup.style.visibility='visible'
        contenedorGrownup.style.transform='translateY(0%)'
        modalGrownup.style.transition='all 500ms ease'
    });
});