window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los sections
    let grownup=document.getElementById('grownup')
    let smallGroup=document.getElementById('smallGroup')
    let vocation=document.getElementById('vocation')

    //capturo los botones de continuar y atras
    let btnSmallGroupContinue=document.getElementById('btnSmallGroupContinue')
    let btnSmallGroupBack=document.getElementById('btnSmallGroupBack')

    //capturo los modals
    let modalGrownup=document.querySelector('.modalGrownup')
    let modalSmallGroup=document.querySelector('.modalSmallGroup')
    let modalVocation=document.querySelector('.modalVocation')

    //capturo los contenedor
    let contenedorGrownup=document.querySelector('.contenedorGrownup')
    let contenedorSmallGroup=document.querySelector('.contenedorSmallGroup')
    let contenedorVocation=document.querySelector('.contenedorVocation')
    
    //capturo los imputs

    //capturo los errores

    //Creo las variables false para radio y checkbox

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES SMALLGROUP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /*>>>>>>>>>> botones Group <<<<<<<<<<*/
    btnSmallGroupBack.addEventListener('click',function(){
        //smallGroup donw
        smallGroup.style.display='none'
        modalSmallGroup.style.opacity='0'
        modalSmallGroup.style.visibility='hidden'
        contenedorSmallGroup.style.transform='translateY(-30%)'
        modalSmallGroup.style.transition='all 500ms ease'

        //grownup up
        grownup.style.display='flex'
        modalGrownup.style.opacity='1'
        modalGrownup.style.visibility='visible'
        contenedorGrownup.style.transform='translateY(0%)'
        modalGrownup.style.transition='all 500ms ease'
    });
    btnSmallGroupContinue.addEventListener('click',function(){
        //smallGroup donw
        smallGroup.style.display='none'
        modalSmallGroup.style.opacity='0'
        modalSmallGroup.style.visibility='hidden'
        contenedorSmallGroup.style.transform='translateY(-30%)'
        modalSmallGroup.style.transition='all 500ms ease'

       //vocation up
       vocation.style.display='flex'
       modalVocation.style.opacity='1'
       modalVocation.style.visibility='visible'
       contenedorVocation.style.transform='translateY(0%)'
       modalVocation.style.transition='all 500ms ease'
    });
});