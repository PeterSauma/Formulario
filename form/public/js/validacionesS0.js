window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los sections
    let welcome=document.getElementById('welcome')
    let personal=document.getElementById('personal')

    //capturo los botones de continuar y atras
    let btnWelcomeContinue=document.getElementById('btnWelcomeContinue')

    //capturo los modals
    let modalWelcome=document.querySelector('.modalWelcome')
    let modalPersonal=document.querySelector('.modalPersonal')

    //capturo los contenedor
    let contenedorWelcome=document.querySelector('.contenedorWelcome')
    let contenedorPersonal=document.querySelector('.contenedorPersonal')

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES WELCOME <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /*>>>>>>>>>> botones Welcome <<<<<<<<<<*/
    btnWelcomeContinue.addEventListener('click',function(){
        //Welcome donw
        welcome.style.display='none'
        modalWelcome.style.opacity='0'
        modalWelcome.style.visibility='hidden'
        contenedorWelcome.style.transform='translateY(-30%)'
        modalWelcome.style.transition='all 2s ease'
        
        //personal up
        personal.style.display='flex'
        modalPersonal.style.opacity='1'
        modalPersonal.style.visibility='visible'
        contenedorPersonal.style.transform='translateY(0%)'
        modalPersonal.style.transition='all 2s ease'
    });
});