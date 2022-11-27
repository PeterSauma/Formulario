//0
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
//1
window.addEventListener('load', function(){
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



    btnPersonalBack.addEventListener('click',function(){
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
    });
    btnPersonalContinue.addEventListener('click',()=>{
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
    });
});
//2
window.addEventListener('load', function(){
    
    //capturo los sections
    let personal=document.getElementById('personal')
    let family=document.getElementById('family')
    let residency=document.getElementById('residency')

    //capturo los botones de continuar y atras
    let btnFamilyBack=document.getElementById('btnFamilyBack')
    let btnFamilyContinue=document.getElementById('btnFamilyContinue')

    //capturo los modals
    let modalPersonal=document.querySelector('.modalPersonal')
    let modalFamily=document.querySelector('.modalFamily')
    let modalResidency=document.querySelector('.modalResidency')
  
    //capturo los contenedor
    let contenedorPersonal=document.querySelector('.contenedorPersonal')
    let contenedorFamily=document.querySelector('.contenedorFamily')
    let contenedorResidency=document.querySelector('.contenedorResidency')


    
    btnFamilyBack.addEventListener('click',function(){
        //family donw
        family.style.display='none'
        modalFamily.style.opacity='0'
        modalFamily.style.visibility='hidden'
        contenedorFamily.style.transform='translateY(-30%)'
        modalFamily.style.transition='all 2s ease'

        //personal up
        personal.style.display='flex'
        modalPersonal.style.opacity='1'
        modalPersonal.style.visibility='visible'
        contenedorPersonal.style.transform='translateY(0%)'
        modalPersonal.style.transition='all 2s ease'    
    });
    btnFamilyContinue.addEventListener('click',function(){
        //family donw
        family.style.display='none'
        modalFamily.style.opacity='0'
        modalFamily.style.visibility='hidden'
        contenedorFamily.style.transform='translateY(-30%)'
        modalFamily.style.transition='all 2s ease'

        //residency up
        residency.style.display='flex'
        modalResidency.style.opacity='1'
        modalResidency.style.visibility='visible'
        contenedorResidency.style.transform='translateY(0%)'
        modalResidency.style.transition='all 2s ease'
    });
});
//3
window.addEventListener('load', function(){  
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
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES RESIDENCY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /*>>>>>>>>>> botones Residency <<<<<<<<<<*/
    btnResidencyBack.addEventListener('click',function(){
        //residency donw
        residency.style.display='none'
        modalResidency.style.opacity='0'
        modalResidency.style.visibility='hidden'
        contenedorResidency.style.transform='translateY(-30%)'
        modalResidency.style.transition='all 2s ease'

        //family up
        family.style.display='flex'
        modalFamily.style.opacity='1'
        modalFamily.style.visibility='visible'
        contenedorFamily.style.transform='translateY(0%)'
        modalFamily.style.transition='all 2s ease'
    });
    btnResidencyContinue.addEventListener('click',function(){
        //reaidency donw
        residency.style.display='none'
        modalResidency.style.opacity='0'
        modalResidency.style.visibility='hidden'
        contenedorResidency.style.transform='translateY(-30%)'
        modalResidency.style.transition='all 2s ease'

        //contact up
        contact.style.display='flex'
        modalContact.style.opacity='1'
        modalContact.style.visibility='visible'
        contenedorContact.style.transform='translateY(0%)'
        modalContact.style.transition='all 2s ease'
    });
});
//4
window.addEventListener('load', function(){
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
//5
window.addEventListener('load', function(){
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

/*6
window.addEventListener('load', function(){    
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
    
    
    btnSmallGroupBack.addEventListener('click',function(){
        //smallGroup donw
        smallGroup.style.display='none'
        modalSmallGroup.style.opacity='0'
        modalSmallGroup.style.visibility='hidden'
        contenedorSmallGroup.style.transform='translateY(-30%)'
        modalSmallGroup.style.transition='all 2s ease'

        //grownup up
        grownup.style.display='flex'
        modalGrownup.style.opacity='1'
        modalGrownup.style.visibility='visible'
        contenedorGrownup.style.transform='translateY(0%)'
        modalGrownup.style.transition='all 2s ease'
    });
    btnSmallGroupContinue.addEventListener('click',function(){
        //smallGroup donw
        smallGroup.style.display='none'
        modalSmallGroup.style.opacity='0'
        modalSmallGroup.style.visibility='hidden'
        contenedorSmallGroup.style.transform='translateY(-30%)'
        modalSmallGroup.style.transition='all 2s ease'

       //vocation up
       vocation.style.display='flex'
       modalVocation.style.opacity='1'
       modalVocation.style.visibility='visible'
       contenedorVocation.style.transform='translateY(0%)'
       modalVocation.style.transition='all 2s ease'
    });
});
*/
//7
window.addEventListener('load', function(){
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
//8
window.addEventListener('load', function(){
    //capturo los sections
    let vocation=document.getElementById('vocation')
    let photo=document.getElementById('photo')

    //capturo los botones de continuar y atras
    let btnPhotoContinue=document.getElementById('btnPhotoContinue')
    let btnPhotoBack=document.getElementById('btnPhotoBack')

    //capturo los modals
    let modalVocation=document.querySelector('.modalVocation')
    let modalPhoto=document.querySelector('.modalPhoto')

    //capturo los contenedor
    let contenedorVocation=document.querySelector('.contenedorVocation')
    let contenedorPhoto=document.querySelector('.contenedorPhoto')

    
    btnPhotoBack.addEventListener('click',function(){
        //photo donw
        photo.style.display='none'
        modalPhoto.style.opacity='0'
        modalPhoto.style.visibility='hidden'
        contenedorPhoto.style.transform='translateY(-30%)'
        modalPhoto.style.transition='all 2s ease'

        //vocation up
        vocation.style.display='flex'
        modalVocation.style.opacity='1'
        modalVocation.style.visibility='visible'
        contenedorVocation.style.transform='translateY(0%)'
        modalVocation.style.transition='all 2s ease'
    });
    btnPhotoContinue.addEventListener('click',function(){
        //photo donw
        photo.style.display='none'
        modalPhoto.style.opacity='0'
        modalPhoto.style.visibility='hidden'
        contenedorPhoto.style.transform='translateY(-30%)'
        modalPhoto.style.transition='all 2s ease'
    });
});