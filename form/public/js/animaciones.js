window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los sections
    let personal=document.getElementById('personal')
    let family=document.getElementById('family')
    let residency=document.getElementById('residency')
    let contact=document.getElementById('contact')
    let grownup=document.getElementById('grownup')
    let smallGroup=document.getElementById('smallGroup')
    let vocation=document.getElementById('vocation')
    let photo=document.getElementById('photo')



    //capturo los botones de continuar y atras
    //0 Welcome
    let btnWelcomeContinue=document.getElementById('btnWelcomeContinue')
    //1 Personal
    let btnPersonalBack=document.getElementById('btnPersonalBack')
    let btnPersonalContinue=document.getElementById('btnPersonalContinue')
    //2 Family
    let btnFamilyBack=document.getElementById('btnFamilyBack')
    let btnFamilyContinue=document.getElementById('btnFamilyContinue')
    //3 Residency
    let btnResidencyContinue=document.getElementById('btnResidencyContinue')
    let btnResidencyBack=document.getElementById('btnResidencyBack')
    //4 Contact
    let btnContactContinue=document.getElementById('btnContactContinue')
    let btnContactBack=document.getElementById('btnContactBack')
    //5 Grownup
    let btnGrownupContinue=document.getElementById('btnGrownupContinue')
    let btnGrownupBack=document.getElementById('btnGrownupBack')
    //6 SmallGroup
    let btnSmallGroupContinue=document.getElementById('btnSmallGroupContinue')
    let btnSmallGroupBack=document.getElementById('btnSmallGroupBack')
    //7 Vocation
    let btnVocationContinue=document.getElementById('btnVocationContinue')
    let btnVocationBack=document.getElementById('btnVocationBack')
    //8 Photo
    let btnPhotoContinue=document.getElementById('btnPhotoContinue')
    let btnPhotoBack=document.getElementById('btnPhotoBack')
    

    //capturo los modals
    let modalPersonal=document.querySelector('.modalPersonal')
    let modalFamily=document.querySelector('.modalFamily')
    let modalResidency=document.querySelector('.modalResidency')
    let modalContact=document.querySelector('.modalContact')
    let modalGrownup=document.querySelector('.modalGrownup')
    let modalSmallGroup=document.querySelector('.modalSmallGroup')
    let modalVocation=document.querySelector('.modalVocation')
    let modalPhoto=document.querySelector('.modalPhoto')

    //capturo los contenedor
    let contenedorPersonal=document.querySelector('.contenedorPersonal')
    let contenedorFamily=document.querySelector('.contenedorFamily')
    let contenedorResidency=document.querySelector('.contenedorResidency')
    let contenedorContact=document.querySelector('.contenedorContact')
    let contenedorGrownup=document.querySelector('.contenedorGrownup')
    let contenedorSmallGroup=document.querySelector('.contenedorSmallGroup')
    let contenedorVocation=document.querySelector('.contenedorVocation')
    let contenedorPhoto=document.querySelector('.contenedorPhoto')
    
    
    
   
        
    





/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 1 PERSONA L<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //levanto el modal Personal
    btnWelcomeContinue.addEventListener('click',function(){
        personal.style.display='flex'
        modalPersonal.style.opacity='1'
        modalPersonal.style.visibility='visible'
        contenedorPersonal.style.transform='translateY(0%)'
        modalPersonal.style.transition='all 500ms ease'
    })
    btnFamilyBack.addEventListener('click',function(){
        personal.style.display='flex'
        modalPersonal.style.opacity='1'
        modalPersonal.style.visibility='visible'
        contenedorPersonal.style.transform='translateY(0%)'
        modalPersonal.style.transition='all 500ms ease'
    })

    //bajo el modal Personal
    btnPersonalBack.addEventListener('click',function(){
        personal.style.display='none'
        modalPersonal.style.opacity='0'
        modalPersonal.style.visibility='hidden'
        contenedorPersonal.style.transform='translateY(-30%)'
        modalPersonal.style.transition='all 500ms ease'
    })
    btnPersonalContinue.addEventListener('click',function(){
        personal.style.display='none'
        modalPersonal.style.opacity='0'
        modalPersonal.style.visibility='hidden'
        contenedorPersonal.style.transform='translateY(-30%)'
        modalPersonal.style.transition='all 500ms ease'
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 2 FAMILY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //levanto el modal Family
    btnPersonalContinue.addEventListener('click',function(){
        family.style.display='flex'
        modalFamily.style.opacity='1'
        modalFamily.style.visibility='visible'
        contenedorFamily.style.transform='translateY(0%)'
        modalFamily.style.transition='all 500ms ease'
    })
    btnResidencyBack.addEventListener('click',function(){
        family.style.display='flex'
        modalFamily.style.opacity='1'
        modalFamily.style.visibility='visible'
        contenedorFamily.style.transform='translateY(0%)'
        modalFamily.style.transition='all 500ms ease'
    })

    //bajo el modal Family
    btnFamilyBack.addEventListener('click',function(){
        family.style.display='none'
        modalFamily.style.opacity='0'
        modalFamily.style.visibility='hidden'
        contenedorFamily.style.transform='translateY(-30%)'
        modalFamily.style.transition='all 500ms ease'
    })
    btnFamilyContinue.addEventListener('click',function(){
        family.style.display='none'
        modalFamily.style.opacity='0'
        modalFamily.style.visibility='hidden'
        contenedorFamily.style.transform='translateY(-30%)'
        modalFamily.style.transition='all 500ms ease'
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 3 RESIDENCY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //levanto el modal Residency
    btnFamilyContinue.addEventListener('click',function(){
        residency.style.display='flex'
        modalResidency.style.opacity='1'
        modalResidency.style.visibility='visible'
        contenedorResidency.style.transform='translateY(0%)'
        modalResidency.style.transition='all 500ms ease'
    })
    btnContactBack.addEventListener('click',function(){
        residency.style.display='flex'
        modalResidency.style.opacity='1'
        modalResidency.style.visibility='visible'
        contenedorResidency.style.transform='translateY(0%)'
        modalResidency.style.transition='all 500ms ease'
    })

    //bajo el modal Residency
    btnResidencyBack.addEventListener('click',function(){
        residency.style.display='none'
        modalResidency.style.opacity='0'
        modalResidency.style.visibility='hidden'
        contenedorResidency.style.transform='translateY(-30%)'
        modalResidency.style.transition='all 500ms ease'
    })
    btnResidencyContinue.addEventListener('click',function(){
        residency.style.display='none'
        modalResidency.style.opacity='0'
        modalResidency.style.visibility='hidden'
        contenedorResidency.style.transform='translateY(-30%)'
        modalResidency.style.transition='all 500ms ease'
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 4 CONTACT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //levanto el modal Contact
    btnResidencyContinue.addEventListener('click',function(){
        contact.style.display='flex'
        modalContact.style.opacity='1'
        modalContact.style.visibility='visible'
        contenedorContact.style.transform='translateY(0%)'
        modalContact.style.transition='all 500ms ease'
    })
    btnGrownupBack.addEventListener('click',function(){
        contact.style.display='flex'
        modalContact.style.opacity='1'
        modalContact.style.visibility='visible'
        contenedorContact.style.transform='translateY(0%)'
        modalContact.style.transition='all 500ms ease'
    })

    //bajo el modal Contact
    btnContactBack.addEventListener('click',function(){
        contact.style.display='none'
        modalContact.style.opacity='0'
        modalContact.style.visibility='hidden'
        contenedorContact.style.transform='translateY(-30%)'
        modalContact.style.transition='all 500ms ease'
    })
    btnContactContinue.addEventListener('click',function(){
        contact.style.display='none'
        modalContact.style.opacity='0'
        modalContact.style.visibility='hidden'
        contenedorContact.style.transform='translateY(-30%)'
        modalContact.style.transition='all 500ms ease'
    })

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 5 GROWNUP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //levanto el modal Grownup
    btnContactContinue.addEventListener('click',function(){
        grownup.style.display='flex'
        modalGrownup.style.opacity='1'
        modalGrownup.style.visibility='visible'
        contenedorGrownup.style.transform='translateY(0%)'
        modalGrownup.style.transition='all 500ms ease'
    })
    btnSmallGroupBack.addEventListener('click',function(){
        grownup.style.display='flex'
        modalGrownup.style.opacity='1'
        modalGrownup.style.visibility='visible'
        contenedorGrownup.style.transform='translateY(0%)'
        modalGrownup.style.transition='all 500ms ease'
    })

    //bajo el modal Grownup
    btnGrownupBack.addEventListener('click',function(){
        grownup.style.display='none'
        modalGrownup.style.opacity='0'
        modalGrownup.style.visibility='hidden'
        contenedorGrownup.style.transform='translateY(-30%)'
        modalGrownup.style.transition='all 500ms ease'
    })
    btnGrownupContinue.addEventListener('click',function(){
        grownup.style.display='none'
        modalGrownup.style.opacity='0'
        modalGrownup.style.visibility='hidden'
        contenedorGrownup.style.transform='translateY(-30%)'
        modalGrownup.style.transition='all 500ms ease'
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 6 SMALLGROUP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //levanto el modal SmallGroup
    btnGrownupContinue.addEventListener('click',function(){
        smallGroup.style.display='flex'
        modalSmallGroup.style.opacity='1'
        modalSmallGroup.style.visibility='visible'
        contenedorSmallGroup.style.transform='translateY(0%)'
        modalSmallGroup.style.transition='all 500ms ease'
    })
    btnVocationBack.addEventListener('click',function(){
        smallGroup.style.display='flex'
        modalSmallGroup.style.opacity='1'
        modalSmallGroup.style.visibility='visible'
        contenedorSmallGroup.style.transform='translateY(0%)'
        modalSmallGroup.style.transition='all 500ms ease'
    })

    //bajo el modal SmallGroup
    btnSmallGroupBack.addEventListener('click',function(){
        smallGroup.style.display='none'
        modalSmallGroup.style.opacity='0'
        modalSmallGroup.style.visibility='hidden'
        contenedorSmallGroup.style.transform='translateY(-30%)'
        modalSmallGroup.style.transition='all 500ms ease'
    })
    btnSmallGroupContinue.addEventListener('click',function(){
        smallGroup.style.display='none'
        modalSmallGroup.style.opacity='0'
        modalSmallGroup.style.visibility='hidden'
        contenedorSmallGroup.style.transform='translateY(-30%)'
        modalSmallGroup.style.transition='all 500ms ease'
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 7 VOCATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //levanto el modal Vocation
    btnSmallGroupContinue.addEventListener('click',function(){
        vocation.style.display='flex'
        modalVocation.style.opacity='1'
        modalVocation.style.visibility='visible'
        contenedorVocation.style.transform='translateY(0%)'
        modalVocation.style.transition='all 500ms ease'
    })
    btnPhotoBack.addEventListener('click',function(){
        vocation.style.display='flex'
        modalVocation.style.opacity='1'
        modalVocation.style.visibility='visible'
        contenedorVocation.style.transform='translateY(0%)'
        modalVocation.style.transition='all 500ms ease'
    })

    //bajo el modal Vocation
    btnVocationBack.addEventListener('click',function(){
        vocation.style.display='none'
        modalVocation.style.opacity='0'
        modalVocation.style.visibility='hidden'
        contenedorVocation.style.transform='translateY(-30%)'
        modalVocation.style.transition='all 500ms ease'
    })
    btnVocationContinue.addEventListener('click',function(){
        vocation.style.display='none'
        modalVocation.style.opacity='0'
        modalVocation.style.visibility='hidden'
        contenedorVocation.style.transform='translateY(-30%)'
        modalVocation.style.transition='all 500ms ease'
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 8 PHOTO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //levanto el modal Photo
    btnVocationContinue.addEventListener('click',function(){
        photo.style.display='flex'
        modalPhoto.style.opacity='1'
        modalPhoto.style.visibility='visible'
        contenedorPhoto.style.transform='translateY(0%)'
        modalPhoto.style.transition='all 500ms ease'
    })

    //bajo el modal Photo
    btnPhotoBack.addEventListener('click',function(){
        photo.style.display='none'
        modalPhoto.style.opacity='0'
        modalPhoto.style.visibility='hidden'
        contenedorPhoto.style.transform='translateY(-30%)'
        modalPhoto.style.transition='all 500ms ease'
    })
    btnPhotoContinue.addEventListener('click',function(){
        photo.style.display='none'
        modalPhoto.style.opacity='0'
        modalPhoto.style.visibility='hidden'
        contenedorPhoto.style.transform='translateY(-30%)'
        modalPhoto.style.transition='all 500ms ease'
    })


});