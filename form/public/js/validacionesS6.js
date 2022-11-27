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
    let isParticipateSmallGroupCheck=document.querySelectorAll('.isParticipateSmallGroup') // type='radio' class='webSite'
    let enjoyMostCheck=document.querySelectorAll('.enjoyMost') // type='checkbox' class='webSite'
    let yourAreaInterestCheck=document.querySelectorAll('.yourAreaInterest') // type='checkbox' class='webSite'
    let yourNeedsCheck=document.querySelectorAll('.yourNeeds') // type='checkbox' class='webSite'
    let nombreGuia=formulario.smallGroupGuide
    let nombreGrupo=formulario.smallGroupName
    let isParticipateSi = formulario.isParticipateSmallGroupSi
    let isParticipateNo = formulario.isParticipateSmallGroupNo

    //capturo los errores
    let isParticipateSmallGroupErr = document.querySelector('#isParticipateSmallGroupErr')
    let enjoyMostErr = document.querySelector('#enjoyMostErr')
    let yourAreaInterestErr = document.querySelector('#yourAreaInterestErr')
    let yourNeedsErr = document.querySelector('#yourNeedsErr')
    let nombreGuiaErr= document.querySelector('#smallGroupGuideErr')
    let nombreGrupoErr= document.querySelector('#smallGroupNameErr')

    //Creo las variables false para validar
    let isParticipateSmallGroup = false 
    let enjoyMost = false 
    let yourAreaInterest = false 
    let yourNeeds = false 
    let nombreGuiaTest = false

    //Expresiones regulares
    let regNum = /^(?=.*[0-9])(?=(.*)).{1,}$/
    let regUpp = /^(?=.*[A-Z])(?=(.*)).{1,}$/
    let regSpecial = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{1,}$/


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES SMALLGROUP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
 /*>>>>> bajo o subo los inputs nombre guía y GP*/
    isParticipateSi.addEventListener('click',function(){
            if (isParticipateSi.checked){
                nombreGuia.style.display='flex'
                nombreGrupo.style.display='flex'
            }else if (!isParticipateSi.checked){
                nombreGuia.style.display='none'
                nombreGrupo.style.display='none'     
            }
    });
    isParticipateNo.addEventListener('click',function(){
        if (isParticipateNo.checked){
            nombreGuia.style.display='none'
            nombreGrupo.style.display='none'
        }else if (!isParticipateNo.checked){
            nombreGuia.style.display='flex'
            nombreGrupo.style.display='flex'     
        }
    });

    //Validacion nombre guía
    nombreGuia.addEventListener('keyup', function(){
        if(regNum.test(nombreGuia.value)){
            nombreGuiaErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(nombreGuia.value)){
            nombreGuiaErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(nombreGuia.value) ){
            nombreGuiaErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            nombreGuiaErr.innerText = ''
        }
    });
    nombreGuia.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(nombreGuia.value ==''){
            nombreGuiaErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(nombreGuia.value.length<3){
            nombreGuiaErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            nombreGuiaErr.innerText= ''
        }
    });

    //Validacion nombre grupo
    nombreGrupo.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(nombreGrupo.value ==''){
            nombreGrupoErr.innerText = 'Si conoce el nombre escribalo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(nombreGrupo.value.length<3){
            nombreGrupoErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            nombreGrupoErr.innerText= ''
        }
    });
    
    /*>>>>>>>>>> botones Group <<<<<<<<<<*/
    btnSmallGroupBack.addEventListener('click',function(){
        //validar asistencia
        isParticipateSmallGroupCheck.forEach((e)=>{
            if(e.checked){
                isParticipateSmallGroup= true
            }
        });
        if(!isParticipateSmallGroup){
            isParticipateSmallGroupErr.innerText='Debe completar este campo'
        }else{
            isParticipateSmallGroupErr.innerText=''
        };
        //validar nombre guía
        if(isParticipateSi.checked){
            if(regNum.test(nombreGuia.value)){
                nombreGuiaErr.innerText = 'No debe escribir números'
            }else if(regSpecial.test(nombreGuia.value)){
                nombreGuiaErr.innerText = 'No debe escribir caracteres especiales'
            }else if(nombreGuia.value ==''){
                nombreGuiaErr.innerText = 'Debe completar este campo'
            }else if (!regUpp.test(nombreGuia.value) ){
                nombreGuiaErr.innerText = 'Debe iniciar con mayuscula'
            }else  if(nombreGuia.value.length<3){
                nombreGuiaErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
            }else {
                nombreGuiaErr.innerText= ''
                nombreGuiaTest = true
            }
        };

        //validar que le gusta
        enjoyMostCheck.forEach((e)=>{
            if(e.checked){
                enjoyMost= true
            }
        });
        if(!enjoyMost){
            enjoyMostErr.innerText='Debe completar este campo'
        }else{
            enjoyMostErr.innerText=''
        }; 
        //validar que le interesa
        yourAreaInterestCheck.forEach((e)=>{
            if(e.checked){
                yourAreaInterest= true
            }
        });
        if(!yourAreaInterest){
            yourAreaInterestErr.innerText='Debe completar este campo'
        }else{
            yourAreaInterestErr.innerText=''
        };
        //vlidar necesidades
        yourNeedsCheck.forEach((e)=>{
            if(e.checked){
                yourNeeds= true
            }
        });
        if(!yourNeeds){
            yourNeedsErr.innerText='Debe completar este campo'
        }else{
            yourNeedsErr.innerText=''
        };
        //si todo está ok pasa
        if(isParticipateSmallGroup && enjoyMost && yourAreaInterest && yourNeeds && nombreGuiaTest){
            //delete errors
            isParticipateSmallGroupErr.innerText=''
            enjoyMostErr.innerText=''
            yourAreaInterestErr.innerText=''
            yourNeedsErr.innerText=''
            nombreGuiaErr.innerText=''
            nombreGrupoErr.innerText=''

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
        }
    });
    btnSmallGroupContinue.addEventListener('click',function(){
        //validar asistencia
        isParticipateSmallGroupCheck.forEach((e)=>{
            if(e.checked){
                isParticipateSmallGroup= true
            }
        });
        if(!isParticipateSmallGroup){
            isParticipateSmallGroupErr.innerText='Debe completar este campo'
        }else{
            isParticipateSmallGroupErr.innerText=''
        };
        //validar nombre guía
        if(isParticipateSi.checked){
            if(regNum.test(nombreGuia.value)){
                nombreGuiaErr.innerText = 'No debe escribir números'
            }else if(regSpecial.test(nombreGuia.value)){
                nombreGuiaErr.innerText = 'No debe escribir caracteres especiales'
            }else if(nombreGuia.value ==''){
                nombreGuiaErr.innerText = 'Debe completar este campo'
            }else if (!regUpp.test(nombreGuia.value) ){
                nombreGuiaErr.innerText = 'Debe iniciar con mayuscula'
            }else  if(nombreGuia.value.length<3){
                nombreGuiaErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
            }else {
                nombreGuiaErr.innerText= ''
                nombreGuiaTest = true
            }
        };

        //validar que le gusta
        enjoyMostCheck.forEach((e)=>{
            if(e.checked){
                enjoyMost= true
            }
        });
        if(!enjoyMost){
            enjoyMostErr.innerText='Debe completar este campo'
        }else{
            enjoyMostErr.innerText=''
        }; 
        //validar que le interesa
        yourAreaInterestCheck.forEach((e)=>{
            if(e.checked){
                yourAreaInterest= true
            }
        });
        if(!yourAreaInterest){
            yourAreaInterestErr.innerText='Debe completar este campo'
        }else{
            yourAreaInterestErr.innerText=''
        };
        //vlidar necesidades
        yourNeedsCheck.forEach((e)=>{
            if(e.checked){
                yourNeeds= true
            }
        });
        if(!yourNeeds){
            yourNeedsErr.innerText='Debe completar este campo'
        }else{
            yourNeedsErr.innerText=''
        };
        //si todo está ok pasa
        if(isParticipateSmallGroup && enjoyMost && yourAreaInterest && yourNeeds && nombreGuiaTest){
            //delete errors
            isParticipateSmallGroupErr.innerText=''
            enjoyMostErr.innerText=''
            yourAreaInterestErr.innerText=''
            yourNeedsErr.innerText=''
            nombreGuiaErr.innerText=''
            nombreGrupoErr.innerText=''

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
        }
    });
});