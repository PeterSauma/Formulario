window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los sections
    let smallGroup=document.getElementById('smallGroup')
    let vocation=document.getElementById('vocation')
    let photo=document.getElementById('photo')

    //capturo los botones de continuar y atras
    let btnVocationContinue=document.getElementById('btnVocationContinue')
    let btnVocationBack=document.getElementById('btnVocationBack')

    //capturo los modals
    let modalSmallGroup=document.querySelector('.modalSmallGroup')
    let modalVocation=document.querySelector('.modalVocation')
    let modalPhoto=document.querySelector('.modalPhoto')

    //capturo los contenedor
    let contenedorSmallGroup=document.querySelector('.contenedorSmallGroup')
    let contenedorVocation=document.querySelector('.contenedorVocation')
    let contenedorPhoto=document.querySelector('.contenedorPhoto')


    
    //capturo los imputs

    //capturo los errores

    //Creo las variables false para radio y checkbox

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES VOCATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /*>>>>>>>>>> botones Vocation <<<<<<<<<<*/
    btnVocationBack.addEventListener('click',function(){
        //vocation donw
        vocation.style.display='none'
        modalVocation.style.opacity='0'
        modalVocation.style.visibility='hidden'
        contenedorVocation.style.transform='translateY(-30%)'
        modalVocation.style.transition='all 2s ease'

        //smallGroup up
        smallGroup.style.display='flex'
        modalSmallGroup.style.opacity='1'
        modalSmallGroup.style.visibility='visible'
        contenedorSmallGroup.style.transform='translateY(0%)'
        modalSmallGroup.style.transition='all 2s ease'
    });
    btnVocationContinue.addEventListener('click',function(){
        //vocation donw
        vocation.style.display='none'
        modalVocation.style.opacity='0'
        modalVocation.style.visibility='hidden'
        contenedorVocation.style.transform='translateY(-30%)'
        modalVocation.style.transition='all 2s ease'

        //photo up
        photo.style.display='flex'
        modalPhoto.style.opacity='1'
        modalPhoto.style.visibility='visible'
        contenedorPhoto.style.transform='translateY(0%)'
        modalPhoto.style.transition='all 2s ease'
    });
});