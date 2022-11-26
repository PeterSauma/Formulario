window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
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

    //capturo los imputs
    let coexistenceSituationCheck=document.querySelectorAll('.coexistenceSituation')  // type='checkbox' class='coexistenceSituation'
    let isChildrenCheck=document.querySelectorAll('.isChildren') // type='radio' class='isChildren'
    let isChildrenSi=formulario.isChildrenSi
    let numberChildren=formulario.numberChildren
    let isChildrenAttendChurch=formulario.isChildrenAttendChurch
    
    //capturo los errores
    let coexistenceSituationErr = document.querySelector('#coexistenceSituationErr')
    let isChildrenErr = document.querySelector('#isChildrenErr')
    let numberChildrenErr = document.querySelector('#numberChildrenErr')
    let isChildrenAttendChurchErr = document.querySelector('#isChildrenAttendChurchErr')

    //Creo las variables false para radio y checkbox
    let coexistenceSituation= false
    let isChildren= false

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES FAMILY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    
    //Validacion si tiene hijos
    isChildrenSi.addEventListener('click',function(){
        numberChildren.style.display='flex'
        isChildrenAttendChurch.style.display='flex'   
    });

    //Validacion del cantidad de hijos
    numberChildren.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(numberChildren.value ==''){
            numberChildrenErr.innerText = 'Debe completar este campo'
        }else {
            numberChildrenErr.innerText= ''
        }
    });

    //Validacion de hijos en la iglesia
    isChildrenAttendChurch.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(isChildrenAttendChurch.value ==''){
            isChildrenAttendChurchErr.innerText = 'Si su/sus hijo/s no asisten debe colocar 0'
        } else
        //no deben ser mas que los que tiene
        if(isChildrenAttendChurch.value>numberChildren.value){
        isChildrenAttendChurchErr.innerText = 'Error, este campo no puede ser mayor a la cantidad de hijos'
        } else {
        isChildrenAttendChurchErr.innerText = ''
        }
    });

    /*>>>>>>>>>> botones Family <<<<<<<<<<*/
    btnFamilyBack.addEventListener('click',function(){
        //valido los check's
        coexistenceSituationCheck.forEach((e)=>{
            if(e.checked){
                coexistenceSituation= true
            }
        })
        isChildrenCheck.forEach((e)=>{
            if(e.checked){
                isChildren= true
            }
        })
        if(!coexistenceSituation){
            coexistenceSituationErr.innerText = 'Debe completar este campo'
        }else if(!isChildren){
            isChildrenErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked & numberChildren.value ==''){
            numberChildrenErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked & isChildrenAttendChurch.value ==''){
            isChildrenAttendChurchErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked & isChildrenAttendChurch.value>numberChildren.value){
            isChildrenAttendChurchErr.innerText = 'Error, este campo no puede ser mayor a la cantidad de hijos'
        }else{
            //delete errors
            coexistenceSituationErr.innerText = ''
            isChildrenErr.innerText = ''
            numberChildrenErr.innerText = ''
            isChildrenAttendChurchErr.innerText = ''

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

        
    });
    btnFamilyContinue.addEventListener('click',function(){
        //valido los check's
        coexistenceSituationCheck.forEach((e)=>{
            if(e.checked){
                coexistenceSituation= true
            }
        })
        isChildrenCheck.forEach((e)=>{
            if(e.checked){
                isChildren= true
            }
        })
        if(!coexistenceSituation){
            coexistenceSituationErr.innerText = 'Debe completar este campo'
        }else if(!isChildren){
            isChildrenErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked & numberChildren.value ==''){
            numberChildrenErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked & isChildrenAttendChurch.value ==''){
            isChildrenAttendChurchErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked & isChildrenAttendChurch.value>numberChildren.value){
            isChildrenAttendChurchErr.innerText = 'Error, este campo no puede ser mayor a la cantidad de hijos'
        }else{
            //delete errors
            coexistenceSituationErr.innerText = ''
            isChildrenErr.innerText = ''
            numberChildrenErr.innerText = ''
            isChildrenAttendChurchErr.innerText = ''


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
    });
});