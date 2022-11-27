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
    let coexistenceSituationDiv=document.getElementById('coexistenceSituationDiv')
    let conyuge=formulario.coexistenceSituationConyuge
    let isChildrenCheck=document.querySelectorAll('.isChildren') // type='radio' class='isChildren'
    let isChildrenSi=formulario.isChildrenSi
    let isChildrenNo=formulario.isChildrenNo
    let numberChildren=formulario.numberChildren
    let isChildrenAttendChurch=formulario.isChildrenAttendChurch
    let isBossCheck=document.querySelectorAll('.isBoss') // type='radio' class='isChildren'
    let isBossSi=formulario.isBossSi
    let isBossNo=formulario.isBossNo
    let coupleBossDiv=document.getElementById('coupleBossDiv')
    let coupleBossCheck=document.querySelectorAll('.coupleBoss')
    let nameCouple=formulario.nameCouple
    let lastNameCouple=formulario.lastNameCouple
    let whoBossDiv=document.getElementById('whoBossDiv')
    let whoBossName=formulario.whoBossName 
    let whoBossLastName=formulario.whoBossLastName
    //(inputs section 1)
    let enPareja=formulario.relationalSituationEnPareja
    let casado=formulario.relationalSituationCasado
    
   


    //capturo los errores
    let coexistenceSituationErr = document.querySelector('#coexistenceSituationErr')
    let isChildrenErr = document.querySelector('#isChildrenErr')
    let numberChildrenErr = document.querySelector('#numberChildrenErr')
    let isChildrenAttendChurchErr = document.querySelector('#isChildrenAttendChurchErr')
    let isBossErr=document.querySelector('#isBossErr')
    let coupleBossErr=document.querySelector('#coupleBossErr')
    let nameCoupleErr=document.querySelector('#nameCoupleErr')
    let lastNameCoupleErr=document.querySelector('#lastNameCoupleErr')
    let whoBossNameErr=document.querySelector('#whoBossNameErr')
    let whoBossLastNameErr=document.querySelector('#whoBossLastNameErr')

    //Creo las variables false para radio y checkbox
    let coexistenceSituation=false
    let isChildren=false
    let isBoss=false
    let coupleBoss=false
    let nameCoupleTest=false 
    let lastNameCoupleTest=false 
    let whoBoss=false

    //Expresiones regulares
    let regNum = /^(?=.*[0-9])(?=(.*)).{1,}$/
    let regUpp = /^(?=.*[A-Z])(?=(.*)).{1,}$/
    let regSpecial = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{1,}$/


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES FAMILY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    
    //Validacion si tiene hijos
    isChildrenSi.addEventListener('click',function(){
        numberChildren.style.display='flex'
        isChildrenAttendChurch.style.display='flex'   
    });
    isChildrenNo.addEventListener('click',function(){
        numberChildren.style.display='none'
        isChildrenAttendChurch.style.display='none'   
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
     numberChildren.addEventListener('keyup', function(){
        if(!regNum.test( numberChildren.value) || regSpecial.test( numberChildren.value) || regUpp.test( numberChildren.value)){
             numberChildrenErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
             numberChildrenErr.innerText = ''
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
    isChildrenAttendChurch.addEventListener('keyup', function(){
        if(!regNum.test( isChildrenAttendChurch.value) || regSpecial.test( isChildrenAttendChurch.value) || regUpp.test( isChildrenAttendChurch.value)){
             isChildrenAttendChurchErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
             isChildrenAttendChurchErr.innerText = ''
        }
    });

    //Validación jefe/a de hogar
    isBossSi.addEventListener('click',function(){
        //es jefe/a de hogar y tine pareja
        if (conyuge.checked || casado.checked || enPareja.checked){
            whoBossDiv.style.display='none'               
            coupleBossDiv.style.display='flex'
        }else 
        //es jefe/a de hogar y no tine pareja
        if (!conyuge.checked && !casado.checked && !enPareja.checked){
            whoBossDiv.style.display='none'   
            coupleBossDiv.style.display='none'     
        }
    });
    isBossNo.addEventListener('click',function(){
        //no es jefe/a de hogar y tine pareja
        if (conyuge.checked || casado.checked || enPareja.checked){
            whoBossDiv.style.display='none'   
            coupleBossDiv.style.display='flex'    
        }else
        //no es jefe/a de hogar y no tine pareja
        if (!conyuge.checked && !casado.checked && !enPareja.checked){
            whoBossDiv.style.display='flex'      
            coupleBossDiv.style.display='none'
        }
    });

    //Validación pareja jefe/a de hogar
    //Mostrar inputs
    if(casado.checked || enPareja.checked || conyuge.checked){
        coupleBossDiv.style.display='flex'
    };
    //Validacion del nombre
    nameCouple.addEventListener('keyup', function(){
        if(regNum.test(nameCouple.value)){
            nameCoupleErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(nameCouple.value)){
            nameCoupleErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(nameCouple.value) ){
            nameCoupleErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            nameCoupleErr.innerText = ''
        }
    });
    nameCouple.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(nameCouple.value ==''){
            nameCoupleErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(nameCouple.value.length<3){
            nameCoupleErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            nameCoupleErr.innerText= ''
        }
    });
    //Validacion del apellido
    lastNameCouple.addEventListener('keyup', function(){
        if(regNum.test(lastNameCouple.value)){
            lastNameCoupleErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(lastNameCouple.value)){
            lastNameCoupleErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(lastNameCouple.value) ){
            lastNameCoupleErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            lastNameCoupleErr.innerText = ''
        }
    })
    lastNameCouple.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(lastNameCouple.value ==''){
            lastNameCoupleErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 3 está mal
        if(lastNameCouple.value.length<3){
            lastNameCoupleErr.innerText = 'El apellido debe tener 3 caracteres mínimo'
        } else {
            lastNameCoupleErr.innerText = ''
        }
    });

    //Validación quien es jefe/a de hogar
    //Validacion del nombre
    whoBossName.addEventListener('keyup', function(){
        if(regNum.test(whoBossName.value)){
            whoBossNameErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(whoBossName.value)){
            whoBossNameErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(whoBossName.value) ){
            whoBossNameErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            whoBossNameErr.innerText = ''
        }
    });
    whoBossName.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(whoBossName.value ==''){
            whoBossNameErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(whoBossName.value.length<3){
            whoBossNameErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            whoBossNameErr.innerText= ''
        }
    });
    //Validacion del apellido
    whoBossLastName.addEventListener('keyup', function(){
        if(regNum.test(whoBossLastName.value)){
            whoBossLastNameErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(whoBossLastName.value)){
            whoBossLastNameErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(whoBossLastName.value) ){
            whoBossLastNameErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            whoBossLastNameErr.innerText = ''
        }
    })
    whoBossLastName.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(whoBossLastName.value ==''){
            whoBossLastNameErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 3 está mal
        if(whoBossLastName.value.length<3){
            whoBossLastNameErr.innerText = 'El apellido debe tener 3 caracteres mínimo'
        } else {
            whoBossLastNameErr.innerText = ''
        }
    });

    /*>>>>>>>>>> botones Family <<<<<<<<<<*/
    btnFamilyBack.addEventListener('click',function(){
        //Valido los inputs para bloquear el boton si no pasan los test
        //cohexistencia
        coexistenceSituationCheck.forEach((e)=>{
            if(e.checked){
                coexistenceSituation= true
            }
        });
        if(!coexistenceSituation){
            coexistenceSituationErr.innerText = 'Debe completar este campo'
        };

        //tiene hijos?
/*>>>>> Valido que complete el campo <<<<<*/
        isChildrenCheck.forEach((e)=>{
            if(e.checked){
                isChildren= true
            }
        });
        if(!isChildren){
            isChildrenErr.innerText = 'Debe completar este campo'
        };
/*>>>>> Valido la cantidad de hijos <<<<<*/
        if(isChildrenSi.checked && numberChildren.value ==''){
            numberChildrenErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked && !regNum.test( numberChildren.value) || isChildrenSi.checked && regSpecial.test( numberChildren.value) || isChildrenSi.checked && regUpp.test( numberChildren.value)){
            numberChildrenErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
                numberChildrenErr.innerText = ''
        };
/*>>>>> Valido la cantidad de hijos en la iglesia <<<<<*/
        if(isChildrenSi.checked && isChildrenAttendChurch.value ==''){
            isChildrenAttendChurchErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked && !regNum.test( isChildrenAttendChurch.value) || isChildrenSi.checked && regSpecial.test( isChildrenAttendChurch.value) || isChildrenSi.checked && regUpp.test( isChildrenAttendChurch.value)){
            isChildrenAttendChurchErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
       }else if(isChildrenSi.checked && isChildrenAttendChurch.value>isChildrenAttendChurch.value){
            isChildrenAttendChurchErr.innerText = 'Error, este campo no puede ser mayor a la cantidad de hijos'
        }else {
            isChildrenAttendChurchErr.innerText = ''
       };

        //es jefe/a de hogar?
        isBossCheck.forEach((e)=>{
            if(e.checked){
                isBoss= true
            }
        });
        if(!isBoss){
            isBossErr.innerText='Debe completar este campo'
        };

        //su pareja asiste a la iglesa?
/*>>>>> valido si la pareja va a la iglesia <<<<<*/
        if(conyuge.checked || casado.checked || enPareja.checked){
            coupleBossCheck.forEach((e)=>{
                if(e.checked){
                    coupleBoss= true
                } 
            })
        }else if(!conyuge.checked && !casado.checked && !enPareja.checked){
            coupleBoss= true
        };
        if(!coupleBoss){
            coupleBossErr.innerText='Debe completar este campo'
        };
/*>>>>> Valido nombre y apellido de la pareja <<<<<*/
        if(conyuge.checked || casado.checked || enPareja.checked){
            //Nombre
            if(regNum.test(nameCouple.value)){
                nameCoupleErr.innerText = 'No debe escribir números'
            }else if(regSpecial.test(nameCouple.value)){
                nameCoupleErr.innerText = 'No debe escribir caracteres especiales'
            }else if (!regUpp.test(nameCouple.value) ){
                nameCoupleErr.innerText = 'Debe iniciar con mayuscula'
            }else if(nameCouple.value ==''){
                nameCoupleErr.innerText = 'Debe completar este campo'
            } else if(nameCouple.value.length<3){
                nameCoupleErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
            }else {
                nameCoupleErr.innerText = ''
                nameCoupleTest=true
            }
            //Apellido
            if(regNum.test(lastNameCouple.value)){
                lastNameCoupleErr.innerText = 'No debe escribir números'
            }else if(regSpecial.test(lastNameCouple.value)){
                lastNameCoupleErr.innerText = 'No debe escribir caracteres especiales'
            }else if (!regUpp.test(lastNameCouple.value) ){
                lastNameCoupleErr.innerText = 'Debe iniciar con mayuscula'
            }else if(lastNameCouple.value ==''){
                lastNameCoupleErr.innerText = 'Debe completar este campo'
            } else if(lastNameCouple.value.length<3){
                lastNameCoupleErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
            }else {
                lastNameCoupleErr.innerText = ''
                lastNameCoupleTest=true
            }
        } else {
            nameCoupleTest=true
            lastNameCoupleTest=true
        };
/*>>>>> Valido que se corresponda conyuge de la section 2 con la pareja/casado de la section 1 <<<<<*/
        if (conyuge.checked && !casado.checked || conyuge.checked && !enPareja.checked){               
            alert ('¡Cuidado! En la sección anterior has declarado que no tienes pareja y aquí dices que sí. Debes corroborar los datos')        
        }else 
        if (!conyuge.checked && casado.checked || !conyuge.checked && enPareja.checked){   
            alert ('¡Cuidado! En en la sección anterior has declarado que tienes pareja y aquí dices que no.  Debes corroborar los datos')        
        }

        //Validación quien es jefe/a de hogar?
        if(conyuge.checked || casado.checked || enPareja.checked || !conyuge.checked && isBossSi.checked || !casado.checked && isBossSi.checked || !enPareja.checked && isBossSi.checked){
            whoBossNameErr.innerText = ''
            whoBossLastNameErr.innerText = ''
            whoBoss=true
        }else if(!conyuge.checked && isBossNo.checked || !casado.checked && isBossNo.checked || !enPareja.checked && isBossNo.checked ){
            //creo dos variables false para validar el nombre y apellido
            let whoBossNameValidator=false
            let whoBossLastNameValidator=false
            //validacion del nombre
            if(regNum.test(whoBossName.value)){
                whoBossNameErr.innerText = 'Debe completar este campo'
            }else if(regSpecial.test(whoBossName.value)){
                whoBossNameErr.innerText = 'Debe completar este campo'
            }else if (!regUpp.test(whoBossName.value) ){
                whoBossNameErr.innerText = 'Debe completar este campo'
            }else if(whoBossName.value ==''){
                whoBossNameErr.innerText = 'Debe completar este campo'
            } else if(whoBossName.value.length<3){
                whoBossNameErr.innerText = 'Debe completar este campo'
            }else {
                whoBossNameErr.innerText = ''
                whoBossNameValidator=true
            }
            //validacion del apellido
            if(regNum.test(whoBossLastName.value)){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            }else if(regSpecial.test(whoBossLastName.value)){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            }else if (!regUpp.test(whoBossLastName.value) ){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            }else if(whoBossLastName.value ==''){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            } else if(whoBossLastName.value.length<3){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            }else {
                whoBossLastNameErr.innerText = ''
                whoBossLastNameValidator=true
            }
            if(whoBossNameValidator && whoBossLastNameValidator){
                whoBoss=true
            }

        };

        //Si las variables son true se activa el boton
        if(coexistenceSituation &&
             isChildren &&
             isBoss &&
             coupleBoss &&
             nameCoupleTest &&
             lastNameCoupleTest &&
             whoBoss){
                
            //delete errors
            coexistenceSituationErr.innerText = ''
            isChildrenErr.innerText = ''
            numberChildrenErr.innerText = ''
            isChildrenAttendChurchErr.innerText = ''
            isBossErr.innerText=''
            coupleBossErr=''
            nameCoupleErr=''
            lastNameCoupleErr=''
            whoBossNameErr=''
            whoBossLastNameErr=''

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
        }  
    });
    btnFamilyContinue.addEventListener('click',function(){
        //Valido los inputs para bloquear el boton si no pasan los test
        //cohexistencia
        coexistenceSituationCheck.forEach((e)=>{
            if(e.checked){
                coexistenceSituation= true
            }
        });
        if(!coexistenceSituation){
            coexistenceSituationErr.innerText = 'Debe completar este campo'
        };

        //tiene hijos?
/*>>>>> Valido que complete el campo <<<<<*/
        isChildrenCheck.forEach((e)=>{
            if(e.checked){
                isChildren= true
            }
        });
        if(!isChildren){
            isChildrenErr.innerText = 'Debe completar este campo'
        };
/*>>>>> Valido la cantidad de hijos <<<<<*/
        if(isChildrenSi.checked && numberChildren.value ==''){
            numberChildrenErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked && !regNum.test( numberChildren.value) || isChildrenSi.checked && regSpecial.test( numberChildren.value) || isChildrenSi.checked && regUpp.test( numberChildren.value)){
            numberChildrenErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            numberChildrenErr.innerText = ''
        };
/*>>>>> Valido la cantidad de hijos en la iglesia <<<<<*/
        if(isChildrenSi.checked && isChildrenAttendChurch.value ==''){
            isChildrenAttendChurchErr.innerText = 'Debe completar este campo'
        }else if(isChildrenSi.checked && !regNum.test( isChildrenAttendChurch.value) || isChildrenSi.checked && regSpecial.test( isChildrenAttendChurch.value) || isChildrenSi.checked && regUpp.test( isChildrenAttendChurch.value)){
            isChildrenAttendChurchErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else if(isChildrenSi.checked && isChildrenAttendChurch.value>isChildrenAttendChurch.value){
            isChildrenAttendChurchErr.innerText = 'Error, este campo no puede ser mayor a la cantidad de hijos'
        }else {
            isChildrenAttendChurchErr.innerText = ''
        };

        //es jefe/a de hogar?
        isBossCheck.forEach((e)=>{
            if(e.checked){
                isBoss= true
            }
        });
        if(!isBoss){
            isBossErr.innerText='Debe completar este campo'
        };

        //su pareja asiste a la iglesa?
/*>>>>> valido si la pareja va a la iglesia <<<<<*/
        if(conyuge.checked || casado.checked || enPareja.checked){
            coupleBossCheck.forEach((e)=>{
                if(e.checked){
                    coupleBoss= true
                } 
            })
        }else if(!conyuge.checked && !casado.checked && !enPareja.checked){
            coupleBoss= true
        };
        if(!coupleBoss){
            coupleBossErr.innerText='Debe completar este campo'
        }; 
/*>>>>> Valido nombre y apellido de la pareja <<<<<*/
        if(conyuge.checked || casado.checked || enPareja.checked){
            //Nombre
            if(regNum.test(nameCouple.value)){
                nameCoupleErr.innerText = 'No debe escribir números'
            }else if(regSpecial.test(nameCouple.value)){
                nameCoupleErr.innerText = 'No debe escribir caracteres especiales'
            }else if (!regUpp.test(nameCouple.value) ){
                nameCoupleErr.innerText = 'Debe iniciar con mayuscula'
            }else if(nameCouple.value ==''){
                nameCoupleErr.innerText = 'Debe completar este campo'
            } else if(nameCouple.value.length<3){
                nameCoupleErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
            }else {
                nameCoupleErr.innerText = ''
                nameCoupleTest=true
            }
            //Apellido
            if(regNum.test(lastNameCouple.value)){
                lastNameCoupleErr.innerText = 'No debe escribir números'
            }else if(regSpecial.test(lastNameCouple.value)){
                lastNameCoupleErr.innerText = 'No debe escribir caracteres especiales'
            }else if (!regUpp.test(lastNameCouple.value) ){
                lastNameCoupleErr.innerText = 'Debe iniciar con mayuscula'
            }else if(lastNameCouple.value ==''){
                lastNameCoupleErr.innerText = 'Debe completar este campo'
            } else if(lastNameCouple.value.length<3){
                lastNameCoupleErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
            }else {
                lastNameCoupleErr.innerText = ''
                lastNameCoupleTest=true
            }
        } else {
            nameCoupleTest=true
            lastNameCoupleTest=true
        };
/*>>>>> Valido que se corresponda conyuge de la section 2 con la pareja/casado de la section 1 <<<<<*/
        if (conyuge.checked && !casado.checked || conyuge.checked && !enPareja.checked){               
            alert ('¡Cuidado! En la sección anterior has declarado que no tienes pareja y aquí dices que sí. Debes corroborar los datos')        
        }else 
        if (!conyuge.checked && casado.checked || !conyuge.checked && enPareja.checked){   
            alert ('¡Cuidado! En en la sección anterior has declarado que tienes pareja y aquí dices que no.  Debes corroborar los datos')        
        }

        //Validación quien es jefe/a de hogar?
        if(conyuge.checked || casado.checked || enPareja.checked || !conyuge.checked && isBossSi.checked || !casado.checked && isBossSi.checked || !enPareja.checked && isBossSi.checked){
            whoBossNameErr.innerText = ''
            whoBossLastNameErr.innerText = ''
            whoBoss=true
        }else if(!conyuge.checked && isBossNo.checked || !casado.checked && isBossNo.checked || !enPareja.checked && isBossNo.checked ){
            //creo dos variables false para validar el nombre y apellido
            let whoBossNameValidator=false
            let whoBossLastNameValidator=false
            //validacion del nombre
            if(regNum.test(whoBossName.value)){
                whoBossNameErr.innerText = 'Debe completar este campo'
            }else if(regSpecial.test(whoBossName.value)){
                whoBossNameErr.innerText = 'Debe completar este campo'
            }else if (!regUpp.test(whoBossName.value) ){
                whoBossNameErr.innerText = 'Debe completar este campo'
            }else if(whoBossName.value ==''){
                whoBossNameErr.innerText = 'Debe completar este campo'
            } else if(whoBossName.value.length<3){
                whoBossNameErr.innerText = 'Debe completar este campo'
            }else {
                whoBossNameErr.innerText = ''
                whoBossNameValidator=true
            }
            //validacion del apellido
            if(regNum.test(whoBossLastName.value)){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            }else if(regSpecial.test(whoBossLastName.value)){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            }else if (!regUpp.test(whoBossLastName.value) ){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            }else if(whoBossLastName.value ==''){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            } else if(whoBossLastName.value.length<3){
                whoBossLastNameErr.innerText = 'Debe completar este campo'
            }else {
                whoBossLastNameErr.innerText = ''
                whoBossLastNameValidator=true
            }
            if(whoBossNameValidator && whoBossLastNameValidator){
                whoBoss=true
            }

        };

        //Si las variables son true se activa el boton
        if(coexistenceSituation &&
             isChildren &&
             isBoss &&
             coupleBoss &&
             nameCoupleTest &&
             lastNameCoupleTest &&
             whoBoss){

            //delete errors
            coexistenceSituationErr.innerText = ''
            isChildrenErr.innerText = ''
            numberChildrenErr.innerText = ''
            isChildrenAttendChurchErr.innerText = ''
            isBossErr.innerText=''
            coupleBossErr=''
            nameCoupleErr=''
            lastNameCoupleErr=''
            whoBossNameErr=''
            whoBossLastNameErr=''


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

        }
    });
});


