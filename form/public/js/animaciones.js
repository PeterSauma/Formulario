window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CAPTURA BOTONES PARA ANIMACIONES DE SECTIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

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
    


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CAPTURA DE INPUTS PARA VALIDACIONES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SECTION 1 PERSONAL <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //capturo los imputs
    let firstName=formulario.firstName
    let lastName=formulario.lastName
    // type='radio' name='sex'
    let sexCheck=document.querySelectorAll('.sex')
    let relationalSituationCheck=document.querySelectorAll('.relationalSituation')
    
    
    //capturo los errores
    let firstNameErr = document.querySelector('#firstNameErr')
    let lastNameErr = document.querySelector('#lastNameErr')
    let sexErr = document.querySelector('#sexErr')
    let relationalSituationErr = document.querySelector('#relationalSituationErr')

    //Creo las variables false para radio y checkbox
    let sex = false
    let relationalSituation = false


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES PERSONAL <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    //Validacion del nombre
    firstName.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(firstName.value ==''){
        firstNameErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(firstName.value.length<3){
        firstNameErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        } else {
        firstNameErr.innerText= ''
        }
    })
    //Validacion del apellido
    lastName.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(lastName.value ==''){
        lastNameErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 3 está mal
        if(lastName.value.length<3){
        lastNameErr.innerText = 'El apellido debe tener 3 caracteres mínimo'
        } else {
        lastNameErr.innerText = ''
        }
    });

/*>>>>>>>>>> botones Personal <<<<<<<<<<*/
    btnPersonalBack.addEventListener('click',function(){
        //valido los check's
        sexCheck.forEach((e)=>{
            if(e.checked){
                sex= true
            }
        })
        relationalSituationCheck.forEach((e)=>{
            if(e.checked){
                relationalSituation= true
            }
        })
        if(firstName.value ==''){
            firstNameErr.innerText = 'Debe completar este campo'
        }else if(lastName.value ==''){
            lastNameErr.innerText = 'Debe completar este campo'
        }else if(sex==false){
            sexErr.innerText = 'Debe completar este campo'
        }else if(relationalSituation==false){
            relationalSituationErr.innerText = 'Debe completar este campo'
        }else {
            //delete errors
            firstNameErr.innerText = ''
            lastNameErr.innerText = ''
            sexErr.innerText = ''
            relationalSituationErr.innerText = ''
            
            //personal donw
            personal.style.display='none'
            modalPersonal.style.opacity='0'
            modalPersonal.style.visibility='hidden'
            contenedorPersonal.style.transform='translateY(-30%)'
            modalPersonal.style.transition='all 500ms ease'
        }
    })
    btnPersonalContinue.addEventListener('click',()=>{
        //valido los check's
        sexCheck.forEach((e)=>{
            if(e.checked){
                sex= true
            }
        })
        relationalSituationCheck.forEach((e)=>{
            if(e.checked){
                relationalSituation= true
            }
        })
        if(firstName.value ==''){
            firstNameErr.innerText = 'Debe completar este campo'
        }else if(lastName.value ==''){
            lastNameErr.innerText = 'Debe completar este campo'
        }else if(sex==false){
            sexErr.innerText = 'Debe completar este campo'
        }else if(relationalSituation==false){
            relationalSituationErr.innerText = 'Debe completar este campo'
        }else {
            //Errors delete
            firstNameErr.innerText = ''
            lastNameErr.innerText = ''
            sexErr.innerText = ''
            relationalSituationErr.innerText = ''

            //personal donw
            personal.style.display='none'
            modalPersonal.style.opacity='0'
            modalPersonal.style.visibility='hidden'
            contenedorPersonal.style.transform='translateY(-30%)'
            modalPersonal.style.transition='all 500ms ease'

            //family up
            family.style.display='flex'
            modalFamily.style.opacity='1'
            modalFamily.style.visibility='visible'
            contenedorFamily.style.transform='translateY(0%)'
            modalFamily.style.transition='all 500ms ease'
            }
    })



/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SECTION FAMILY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    //capturo los imputs
    let coexistenceSituationCheck=document.querySelectorAll('.coexistenceSituation')
    let isChildrenCheck=document.querySelectorAll('.isChildren')
    let isChildrenSi=formulario.isChildrenSi
    let numberChildren=formulario.numberChildren
    let isChildrenAttendChurch=formulario.isChildrenAttendChurch
    //capturo los errores
    let coexistenceSituationErr = document.querySelector('#coexistenceSituationErr')
    let isChildrenErr = document.querySelector('#isChildrenErr')
    let numberChildrenErr = document.querySelector('#numberChildren')
    let isChildrenAttendChurchErr = document.querySelector('#isChildrenAttendChurch')

    //Creo las variables false para radio y checkbox
    let coexistenceSituation= false
    let isChildren= false

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES FAMILY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    isChildrenSi.addEventListener('click',function(){
        numberChildren.style.display='flex'
        isChildrenAttendChurch.style.display='flex'   
    })

/*>>>>>>>>>> botones Family <<<<<<<<<<*/
    btnFamilyBack.addEventListener('click',function(){
        coexistenceSituationCheck.forEach((e)=>{
            if(e.checked){
                coexistenceSituation= true
            }
        })
        if(coexistenceSituation==false){
            coexistenceSituationErr.innerText = 'Debe completar este campo'
        }else{
            //delet errors
            coexistenceSituationErr.innerText = ''

            //family donw
            family.style.display='none'
            modalFamily.style.opacity='0'
            modalFamily.style.visibility='hidden'
            contenedorFamily.style.transform='translateY(-30%)'
            modalFamily.style.transition='all 500ms ease'

            //personal up
            personal.style.display='flex'
            modalPersonal.style.opacity='1'
            modalPersonal.style.visibility='visible'
            contenedorPersonal.style.transform='translateY(0%)'
            modalPersonal.style.transition='all 500ms ease'
        }

        
    })
    btnFamilyContinue.addEventListener('click',function(){
        coexistenceSituationCheck.forEach((e)=>{
            if(e.checked){
                coexistenceSituation= true
            }
        })
        if(coexistenceSituation==false){
            coexistenceSituationErr.innerText = 'Debe completar este campo'
        }else {
        //delet errors
        coexistenceSituationErr.innerText = ''

        //family donw
        family.style.display='none'
        modalFamily.style.opacity='0'
        modalFamily.style.visibility='hidden'
        contenedorFamily.style.transform='translateY(-30%)'
        modalFamily.style.transition='all 500ms ease'

        //residency up
        residency.style.display='flex'
        modalResidency.style.opacity='1'
        modalResidency.style.visibility='visible'
        contenedorResidency.style.transform='translateY(0%)'
        modalResidency.style.transition='all 500ms ease'

        }
    })
    



    



/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  ANIMACIONES DE BOTONES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 0 WELCOME <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    btnWelcomeContinue.addEventListener('click',function(){
        personal.style.display='flex'
        modalPersonal.style.opacity='1'
        modalPersonal.style.visibility='visible'
        contenedorPersonal.style.transform='translateY(0%)'
        modalPersonal.style.transition='all 500ms ease'
    })





/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 3 RESIDENCY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
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
    })
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
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 4 CONTACT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
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
    })
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
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 5 GROWNUP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    btnGrownupBack.addEventListener('click',function(){
        //grownup donw
        grownup.style.display='none'
        modalGrownup.style.opacity='0'
        modalGrownup.style.visibility='hidden'
        contenedorGrownup.style.transform='translateY(-30%)'
        modalGrownup.style.transition='all 500ms ease'

        //contact upp
        contact.style.display='flex'
        modalContact.style.opacity='1'
        modalContact.style.visibility='visible'
        contenedorContact.style.transform='translateY(0%)'
        modalContact.style.transition='all 500ms ease'
    })
    btnGrownupContinue.addEventListener('click',function(){
        //grownup donw
        grownup.style.display='none'
        modalGrownup.style.opacity='0'
        modalGrownup.style.visibility='hidden'
        contenedorGrownup.style.transform='translateY(-30%)'
        modalGrownup.style.transition='all 500ms ease'

        //smallGroup up
        smallGroup.style.display='flex'
        modalSmallGroup.style.opacity='1'
        modalSmallGroup.style.visibility='visible'
        contenedorSmallGroup.style.transform='translateY(0%)'
        modalSmallGroup.style.transition='all 500ms ease'
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 6 SMALLGROUP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
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
    })
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
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 7 VOCATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    btnVocationBack.addEventListener('click',function(){
        //vocation donw
        vocation.style.display='none'
        modalVocation.style.opacity='0'
        modalVocation.style.visibility='hidden'
        contenedorVocation.style.transform='translateY(-30%)'
        modalVocation.style.transition='all 500ms ease'

        //smallGroup up
        smallGroup.style.display='flex'
        modalSmallGroup.style.opacity='1'
        modalSmallGroup.style.visibility='visible'
        contenedorSmallGroup.style.transform='translateY(0%)'
        modalSmallGroup.style.transition='all 500ms ease'
    })
    btnVocationContinue.addEventListener('click',function(){
        //vocation donw
        vocation.style.display='none'
        modalVocation.style.opacity='0'
        modalVocation.style.visibility='hidden'
        contenedorVocation.style.transform='translateY(-30%)'
        modalVocation.style.transition='all 500ms ease'

        //photo up
        photo.style.display='flex'
        modalPhoto.style.opacity='1'
        modalPhoto.style.visibility='visible'
        contenedorPhoto.style.transform='translateY(0%)'
        modalPhoto.style.transition='all 500ms ease'
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 8 PHOTO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    btnPhotoBack.addEventListener('click',function(){
        //photo donw
        photo.style.display='none'
        modalPhoto.style.opacity='0'
        modalPhoto.style.visibility='hidden'
        contenedorPhoto.style.transform='translateY(-30%)'
        modalPhoto.style.transition='all 500ms ease'

        //vocation up
        vocation.style.display='flex'
        modalVocation.style.opacity='1'
        modalVocation.style.visibility='visible'
        contenedorVocation.style.transform='translateY(0%)'
        modalVocation.style.transition='all 500ms ease'
    })
    btnPhotoContinue.addEventListener('click',function(){
        //photo donw
        photo.style.display='none'
        modalPhoto.style.opacity='0'
        modalPhoto.style.visibility='hidden'
        contenedorPhoto.style.transform='translateY(-30%)'
        modalPhoto.style.transition='all 500ms ease'
    })


});