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
    let servicesChurchCheck=document.querySelectorAll('.servicesChurch') // type='radio' class='webSite'
    let servicesChurchSi=formulario.servicesChurchSi
    let servicesChurchNo=formulario.servicesChurchNo
    let areaServices=formulario.areaServices
    let areaServices2=formulario.areaServices2
    let areaServices3=formulario.areaServices3
    let profession=formulario.profession
    let lastJob=formulario.lastJob
    let artist=formulario.artist

    //capturo los errores
    let servicesChurchErr = document.querySelector('#servicesChurchErr')
    let areaServicesErr= document.querySelector('#areaServicesErr')
    let areaServices2Err= document.querySelector('#areaServices2Err')
    let areaServices3Err= document.querySelector('#areaServices3Err')
    let professionErr= document.querySelector('#professionErr')
    let lastJobErr= document.querySelector('#lastJobErr')
    let artistErr= document.querySelector('#artistErr')

    //Creo las variables false para validar
    let servicesChurch = false  
    let areaServicesTest = false

    //Expresiones regulares
    let regNum = /^(?=.*[0-9])(?=(.*)).{1,}$/
    let regUpp = /^(?=.*[A-Z])(?=(.*)).{1,}$/
    let regSpecial = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂ÇéâüäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£ØƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{1,}$/


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES VOCATION <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

     /*>>>>> bajo o subo los inputs nombre guía y GP*/
    servicesChurchSi.addEventListener('click',function(){
        if (servicesChurchSi.checked){
            areaServices.style.display='flex'
            areaServices2.style.display='flex'
            areaServices3.style.display='flex'
        }else if (!servicesChurchSi.checked){
            areaServices.style.display='none'
            areaServices2.style.display='none'     
            areaServices3.style.display='none'     
        }
    });
    servicesChurchNo.addEventListener('click',function(){
        if (servicesChurchNo.checked){
            areaServices.style.display='none'
            areaServices2.style.display='none'
            areaServices3.style.display='none'
        }else if (!servicesChurchNo.checked){
            areaServices.style.display='flex'
            areaServices2.style.display='flex'     
            areaServices3.style.display='flex'     
        }
    });
    //Validacion servicio
    //1
    areaServices.addEventListener('keyup', function(){
        if(regNum.test(areaServices.value)){
            areaServicesErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(areaServices.value)){
            areaServicesErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(areaServices.value) ){
            areaServicesErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            areaServicesErr.innerText = ''
        }
    });
    areaServices.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(areaServices.value ==''){
            areaServicesErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(areaServices.value.length<3){
            areaServicesErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            areaServicesErr.innerText= ''
        }
    });
    //2
    areaServices2.addEventListener('keyup', function(){
        if(regNum.test(areaServices2.value)){
            areaServices2Err.innerText = 'No debe escribir números'
        }else if(regSpecial.test(areaServices2.value)){
            areaServices2Err.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(areaServices2.value) ){
            areaServices2Err.innerText = 'Debe iniciar con mayuscula'
        }else {
            areaServices2Err.innerText = ''
        }
    });
    areaServices2.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(areaServices2.value ==''){
            areaServices2Err.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(areaServices2.value.length<3){
            areaServices2Err.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            areaServices2Err.innerText= ''
        }
    });
    //3
    areaServices3.addEventListener('keyup', function(){
        if(regNum.test(areaServices3.value)){
            areaServices3Err.innerText = 'No debe escribir números'
        }else if(regSpecial.test(areaServices3.value)){
            areaServices3Err.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(areaServices3.value) ){
            areaServices3Err.innerText = 'Debe iniciar con mayuscula'
        }else {
            areaServices3Err.innerText = ''
        }
    });
    areaServices3.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(areaServices3.value ==''){
            areaServices3Err.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(areaServices3.value.length<3){
            areaServices3Err.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            areaServices3Err.innerText= ''
        }
    });

    //Validacion profesion
    profession.addEventListener('keyup', function(){
        if(regNum.test(profession.value)){
            professionErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(profession.value)){
            professionErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(profession.value) ){
            professionErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            professionErr.innerText = ''
        }
    });
    profession.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(profession.value ==''){
            professionErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(profession.value.length<3){
            professionErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            professionErr.innerText= ''
        }
    });
    //Validacion Trabajo
    lastJob.addEventListener('keyup', function(){
        if(regNum.test(lastJob.value)){
            lastJobErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(lastJob.value)){
            lastJobErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(lastJob.value) ){
            lastJobErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            lastJobErr.innerText = ''
        }
    });
    lastJob.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(lastJob.value ==''){
            lastJobErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(lastJob.value.length<3){
            lastJobErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            lastJobErr.innerText= ''
        }
    });
    //Validacion artista
    artist.addEventListener('keyup', function(){
        if(regNum.test(artist.value)){
            artistErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(artist.value)){
            artistErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(artist.value) ){
            artistErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            artistErr.innerText = ''
        }
    });
    artist.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(artist.value ==''){
            artistErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(artist.value.length<3){
            artistErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            artistErr.innerText= ''
        }
    });

    /*>>>>>>>>>> botones Vocation <<<<<<<<<<*/
    btnVocationBack.addEventListener('click',function(){
        //validar servicio
        servicesChurchCheck.forEach((e)=>{
            if(e.checked){
                servicesChurch= true
            }
        });
        if(!servicesChurch){
            servicesChurchErr.innerText='Debe completar este campo'
        }else{
            servicesChurchErr.innerText=''
        };

        //validar area de servicio
        if(servicesChurchSi.checked){
            if(regNum.test(areaServices.value)){
                areaServicesErr.innerText = 'No debe escribir números'
            }else if(regSpecial.test(areaServices.value)){
                areaServicesErr.innerText = 'No debe escribir caracteres especiales'
            }else if(areaServices.value ==''){
                areaServicesErr.innerText = 'Debe completar al menos un área de servicio'
            }else if (!regUpp.test(areaServices.value) ){
                areaServicesErr.innerText = 'Debe iniciar con mayuscula'
            }else  if(areaServices.value.length<3){
                areaServicesErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
            }else {
                areaServicesErr.innerText= ''
                areaServicesTest = true
            }
        }else if (servicesChurchNo.checked){
            areaServicesTest = true
        };

        //si esta ok pasa
        if(servicesChurch && areaServicesTest){
            //Delete errors
            servicesChurchErr.innerText=''
            areaServicesErr.innerText=''
            areaServices2Err.innerText=''
            areaServices3Err.innerText=''
            professionErr.innerText=''
            lastJobErr.innerText=''
            artistErr.innerText=''

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

        }

    });
    btnVocationContinue.addEventListener('click',function(){
        //validar servicio
        servicesChurchCheck.forEach((e)=>{
            if(e.checked){
                servicesChurch= true
            }
        });
        if(!servicesChurch){
            servicesChurchErr.innerText='Debe completar este campo'
        }else{
            servicesChurchErr.innerText=''
        };

        //validar area de servicio
        if(servicesChurchSi.checked){
            if(regNum.test(areaServices.value)){
                areaServicesErr.innerText = 'No debe escribir números'
            }else if(regSpecial.test(areaServices.value)){
                areaServicesErr.innerText = 'No debe escribir caracteres especiales'
            }else if(areaServices.value ==''){
                areaServicesErr.innerText = 'Debe completar al menos un área de servicio'
            }else if (!regUpp.test(areaServices.value) ){
                areaServicesErr.innerText = 'Debe iniciar con mayuscula'
            }else  if(areaServices.value.length<3){
                areaServicesErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
            }else {
                areaServicesErr.innerText= ''
                areaServicesTest = true
            }
        }else if (servicesChurchNo.checked){
            areaServicesTest = true
        };

        //si esta ok pasa
        if(servicesChurch && areaServicesTest){
            //Delete errors
            servicesChurchErr.innerText=''
            areaServicesErr.innerText=''
            areaServices2Err.innerText=''
            areaServices3Err.innerText=''
            professionErr.innerText=''
            lastJobErr.innerText=''
            artistErr.innerText=''

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
        }
    });
});