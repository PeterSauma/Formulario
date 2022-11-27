window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los sections
    let contact=document.getElementById('contact')
    let grownup=document.getElementById('grownup')
    let smallGroup=document.getElementById('smallGroup')

    //capturo los botones de continuar y atras
    let btnGrownupContinue=document.getElementById('btnGrownupContinue')
    let btnGrownupBack=document.getElementById('btnGrownupBack')

    //capturo los modals
    let modalContact=document.querySelector('.modalContact')
    let modalGrownup=document.querySelector('.modalGrownup')
    let modalSmallGroup=document.querySelector('.modalSmallGroup')

    //capturo los contenedor
    let contenedorContact=document.querySelector('.contenedorContact')
    let contenedorGrownup=document.querySelector('.contenedorGrownup')
    let contenedorSmallGroup=document.querySelector('.contenedorSmallGroup')
    
    //capturo los imputs

    //capturo los errores

    //Creo las variables false para radio y checkbox

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES GROWNUP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /*>>>>>>>>>> botones Grownup <<<<<<<<<<*/
    btnGrownupBack.addEventListener('click',function(){
        //grownup donw
        grownup.style.display='none'
        modalGrownup.style.opacity='0'
        modalGrownup.style.visibility='hidden'
        contenedorGrownup.style.transform='translateY(-30%)'
        modalGrownup.style.transition='all 2s ease'

        //contact upp
        contact.style.display='flex'
        modalContact.style.opacity='1'
        modalContact.style.visibility='visible'
        contenedorContact.style.transform='translateY(0%)'
        modalContact.style.transition='all 2s ease'
    });
    btnGrownupContinue.addEventListener('click',function(){
        //grownup donw
        grownup.style.display='none'
        modalGrownup.style.opacity='0'
        modalGrownup.style.visibility='hidden'
        contenedorGrownup.style.transform='translateY(-30%)'
        modalGrownup.style.transition='all 2s ease'

        //smallGroup up
        smallGroup.style.display='flex'
        modalSmallGroup.style.opacity='1'
        modalSmallGroup.style.visibility='visible'
        contenedorSmallGroup.style.transform='translateY(0%)'
        modalSmallGroup.style.transition='all 2s ease'
    });
});