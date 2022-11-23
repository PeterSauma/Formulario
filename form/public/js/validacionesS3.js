window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los sections
    let family=document.getElementById('family')
    let residency=document.getElementById('residency')
    let contact=document.getElementById('contact')

    //capturo los botones de continuar y atras
    let btnResidencyContinue=document.getElementById('btnResidencyContinue')
    let btnResidencyBack=document.getElementById('btnResidencyBack')

    //capturo los modals
    let modalFamily=document.querySelector('.modalFamily')
    let modalResidency=document.querySelector('.modalResidency')
    let modalContact=document.querySelector('.modalContact')

    //capturo los contenedor
    let contenedorFamily=document.querySelector('.contenedorFamily')
    let contenedorResidency=document.querySelector('.contenedorResidency')
    let contenedorContact=document.querySelector('.contenedorContact')
    
    //capturo los imputs

    //capturo los errores

    //Creo las variables false para radio y checkbox

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES RESIDENCY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /*>>>>>>>>>> botones Residency <<<<<<<<<<*/
    btnResidencyBack.addEventListener('click',function(){
        //residency donw
        residency.style.display='none'
        modalResidency.style.opacity='0'
        modalResidency.style.visibility='hidden'
        contenedorResidency.style.transform='translateY(-30%)'
        modalResidency.style.transition='all 500ms ease'

        //family up
        family.style.display='flex'
        modalFamily.style.opacity='1'
        modalFamily.style.visibility='visible'
        contenedorFamily.style.transform='translateY(0%)'
        modalFamily.style.transition='all 500ms ease'
    });
    btnResidencyContinue.addEventListener('click',function(){
        //reaidency donw
        residency.style.display='none'
        modalResidency.style.opacity='0'
        modalResidency.style.visibility='hidden'
        contenedorResidency.style.transform='translateY(-30%)'
        modalResidency.style.transition='all 500ms ease'

        //contact up
        contact.style.display='flex'
        modalContact.style.opacity='1'
        modalContact.style.visibility='visible'
        contenedorContact.style.transform='translateY(0%)'
        modalContact.style.transition='all 500ms ease'
    });
});