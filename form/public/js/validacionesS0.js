window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los sections
    let personal=document.getElementById('personal')

    //capturo los botones de continuar y atras
    let btnWelcomeContinue=document.getElementById('btnWelcomeContinue')

    //capturo los modals
    let modalPersonal=document.querySelector('.modalPersonal')

    //capturo los contenedor
    let contenedorPersonal=document.querySelector('.contenedorPersonal')
   
    //capturo los imputs

    //capturo los errores

    //Creo las variables false para radio y checkbox

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES WELCOME <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /*>>>>>>>>>> botones Welcome <<<<<<<<<<*/
    btnWelcomeContinue.addEventListener('click',function(){
        personal.style.display='flex'
        modalPersonal.style.opacity='1'
        modalPersonal.style.visibility='visible'
        contenedorPersonal.style.transform='translateY(0%)'
        modalPersonal.style.transition='all 500ms ease'
    });
});