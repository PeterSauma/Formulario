window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
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
    
    //capturo los imputs
    let country=formulario.country
    let state=formulario.state
    let city=formulario.city
    let location=formulario.location
    let street=formulario.street
    let numeration=formulario.numeration
    let secondLine=formulario.secondLine
    let neighborhood=formulario.neighborhood
    let neighborhoodBlock=formulario.neighborhoodBlock
    let houseNumber=formulario.houseNumber
    let postalCode=formulario.postalCode

    //capturo los errores
    let countryErr = document.querySelector('#countryErr')
    let stateErr = document.querySelector('#stateErr')
    let cityErr = document.querySelector('#cityErr')
    let locationErr = document.querySelector('#locationErr')
    let streetErr = document.querySelector('#streetErr')
    let numerationErr = document.querySelector('#numerationErr')
    let secondLineErr = document.querySelector('#secondLineErr')
    let neighborhoodErr = document.querySelector('#neighborhoodErr')
    let neighborhoodBlockErr = document.querySelector('#neighborhoodBlockErr')
    let houseNumberErr = document.querySelector('#houseNumberErr')
    let postalCodeErr = document.querySelector('#postalCodeErr')

    //Creo las variables false para validar
    let countryTest = false
    let stateTest = false
    let cityTest = false
    let streetTest = false
    let numerationTest = false
    let postalCodeTest = false

    
    //Expresiones regulares
    let regNum = /^(?=.*[0-9])(?=(.*)).{1,}$/
    let regUpp = /^(?=.*[A-Z])(?=(.*)).{1,}$/
    let regSpecial = /^(?=.*[\!ºª☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~⌂Çø£Øƒ´ªº¿®¬½¼¡«»░▒▓│┤©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ßÔÒµþÞýÝ¯­±‗¾§÷¸°¨·¹³²■\@#$%&¬*()\\[\]{}\-_+=`~|:"'¿?<>,;./Ç])(?=(.*)).{1,}$/



/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES RESIDENCY <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    //validacion pais
    country.addEventListener('keyup', function(){
        if(regNum.test(country.value)){
            countryErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(country.value)){
            countryErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(country.value) ){
            countryErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            countryErr.innerText = ''
        }
    });
    country.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(country.value ==''){
            countryErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(country.value.length<3){
            countryErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            countryErr.innerText= ''
        }
    });

    //validacion provincia
    state.addEventListener('keyup', function(){
        if(regNum.test(state.value)){
            stateErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(state.value)){
            stateErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(state.value) ){
            stateErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            stateErr.innerText = ''
        }
    });
    state.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(state.value ==''){
            stateErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(state.value.length<3){
            stateErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            stateErr.innerText= ''
        }
    });

    //validacion departamento
    city.addEventListener('keyup', function(){
        if(regNum.test(city.value)){
            cityErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(city.value)){
            cityErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(city.value) ){
            cityErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            cityErr.innerText = ''
        }
    });
    city.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(city.value ==''){
            cityErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(city.value.length<3){
            cityErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            cityErr.innerText= ''
        }
    });

    //validacion localidad
    location.addEventListener('keyup', function(){
        if(regNum.test(location.value)){
            locationErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(location.value)){
            locationErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(location.value) ){
            locationErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            locationErr.innerText = ''
        }
    });
    location.addEventListener('blur', function(){
        if(location.value ==''){
            locationErr.innerText = ''
        }
    });

    //validacion calle
    street.addEventListener('keyup', function(){
        if(regNum.test(street.value)){
            streetErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(street.value)){
            streetErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(street.value) ){
            streetErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            streetErr.innerText = ''
        }
    });
    street.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(street.value ==''){
            streetErr.innerText = 'Debe completar este campo'
        } else
        //Haciendo imput.value.length tengo la cantidad de caracteres, si en menor a 2 está mal
        if(street.value.length<3){
            streetErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            streetErr.innerText= ''
        }
    });

    //validacion nuemeracion
    numeration.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(numeration.value ==''){
            numerationErr.innerText = 'Debe completar este campo'
        }else {
            numerationErr.innerText= ''
        }
    });
    numeration.addEventListener('keyup', function(){
        if(!regNum.test(numeration.value) || regSpecial.test(numeration.value) || regUpp.test(numeration.value)){
            numerationErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            numerationErr.innerText = ''
        }
    });
    
    //validacion aclaración
    secondLine.addEventListener('keyup', function(){
        if(regNum.test(secondLine.value)){
            secondLineErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(secondLine.value)){
            secondLineErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(secondLine.value) ){
            secondLineErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            secondLineErr.innerText = ''
        }
    });
    secondLine.addEventListener('blur', function(){
        if(secondLine.value ==''){
            secondLineErr.innerText = ''
        }
    });

    //validacion barrio
    neighborhood.addEventListener('keyup', function(){
        if(regNum.test(neighborhood.value)){
            neighborhoodErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(neighborhood.value)){
            neighborhoodErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(neighborhood.value) ){
            neighborhoodErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            neighborhoodErr.innerText = ''
        }
    });
    neighborhood.addEventListener('blur', function(){
        if(neighborhood.value ==''){
            neighborhoodErr.innerText = ''
        }
    });

    //validacion manzana
    neighborhoodBlock.addEventListener('keyup', function(){
        if(regNum.test(neighborhoodBlock.value)){
            neighborhoodBlockErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(neighborhoodBlock.value)){
            neighborhoodBlockErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(neighborhoodBlock.value) ){
            neighborhoodBlockErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            neighborhoodBlockErr.innerText = ''
        }
    });
    neighborhoodBlock.addEventListener('blur', function(){
        if(neighborhoodBlock.value ==''){
            neighborhoodBlockErr.innerText = ''
        }
    });

    //validacion casa
    houseNumber.addEventListener('keyup', function(){
        if(regNum.test(houseNumber.value)){
            houseNumberErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(houseNumber.value)){
            houseNumberErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(houseNumber.value) ){
            houseNumberErr.innerText = 'Debe iniciar con mayuscula'
        }else {
            houseNumberErr.innerText = ''
        }
    });
    houseNumber.addEventListener('blur', function(){
        if(houseNumber.value ==''){
            houseNumberErr.innerText = ''
        }
    });

    //validacion codigo postal
    postalCode.addEventListener('blur', function(){
        //El imput no puede estar vacío
        if(postalCode.value ==''){
            postalCodeErr.innerText = 'Debe completar este campo'
        }else {
            postalCodeErr.innerText= ''
        }
    });
    postalCode.addEventListener('keyup', function(){
        if(!regNum.test(postalCode.value) || regSpecial.test(postalCode.value) || regUpp.test(postalCode.value)){
            postalCodeErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            postalCodeErr.innerText = ''
        }
    });


    /*>>>>>>>>>> botones Residency <<<<<<<<<<*/
    btnResidencyBack.addEventListener('click',function(){
        //validacion pais
        if(regNum.test(country.value)){
            countryErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(country.value)){
            countryErr.innerText = 'No debe escribir caracteres especiales'
        }else if(country.value ==''){
            countryErr.innerText = 'Debe completar este campo'
        }else if (!regUpp.test(country.value) ){
            countryErr.innerText = 'Debe iniciar con mayuscula'
        }else if(country.value.length<3){
            countryErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            countryErr.innerText= ''
            countryTest = true
        };

        //validacion provincia
        if(regNum.test(state.value)){
            stateErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(state.value)){
            stateErr.innerText = 'No debe escribir caracteres especiales'
        }else if(state.value ==''){
            stateErr.innerText = 'Debe completar este campo'
        } else if (!regUpp.test(state.value) ){
            stateErr.innerText = 'Debe iniciar con mayuscula'
        }else if(state.value.length<3){
            stateErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            stateErr.innerText= ''
            stateTest=true
        };

        //validacion departamento
        if(regNum.test(city.value)){
            cityErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(city.value)){
            cityErr.innerText = 'No debe escribir caracteres especiales'
        }else if(city.value ==''){
            cityErr.innerText = 'Debe completar este campo'
        }else if (!regUpp.test(city.value) ){
            cityErr.innerText = 'Debe iniciar con mayuscula'
        }else if(city.value.length<3){
            cityErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            cityErr.innerText= ''
            cityTest=true
        };

        //validacion calle
        if(regNum.test(street.value)){
            streetErr.innerText = 'No debe escribir números'
        }else if(street.value ==''){
            streetErr.innerText = 'Debe completar este campo'
        }else if(regSpecial.test(street.value)){
            streetErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(street.value) ){
            streetErr.innerText = 'Debe iniciar con mayuscula'
        }else if(street.value.length<3){
            streetErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            streetErr.innerText= ''
            streetTest=true
        };

        //validacion nuemeracion
        if(numeration.value ==''){
            numerationErr.innerText = 'Debe completar este campo'
        }else if(!regNum.test(numeration.value) || regSpecial.test(numeration.value) || regUpp.test(numeration.value)){
            numerationErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            numerationErr.innerText = ''
            numerationTest=true
        };

         //validacion codigo postal
        if(postalCode.value ==''){
            postalCodeErr.innerText = 'Debe completar este campo'
        }else if(!regNum.test(postalCode.value) || regSpecial.test(postalCode.value) || regUpp.test(postalCode.value)){
            postalCodeErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            postalCodeErr.innerText = ''
            postalCodeTest=true
        }

        //si esta ok pasa
        if(countryTest && stateTest && cityTest && streetTest && numerationTest && postalCodeTest){
            //delete errors
            countryErr.innerText=''
            stateErr.innerText=''
            cityErr.innerText=''
            locationErr.innerText=''
            streetErr.innerText=''
            numerationErr.innerText=''
            secondLineErr.innerText=''
            neighborhoodErr.innerText=''
            neighborhoodBlockErr.innerText=''
            houseNumberErr.innerText=''
            postalCodeErr.innerText=''

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
        }

    });
    btnResidencyContinue.addEventListener('click',function(){
        //validacion pais
        if(regNum.test(country.value)){
            countryErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(country.value)){
            countryErr.innerText = 'No debe escribir caracteres especiales'
        }else if(country.value ==''){
            countryErr.innerText = 'Debe completar este campo'
        }else if (!regUpp.test(country.value) ){
            countryErr.innerText = 'Debe iniciar con mayuscula'
        }else if(country.value.length<3){
            countryErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            countryErr.innerText= ''
            countryTest = true
        };

        //validacion provincia
        if(regNum.test(state.value)){
            stateErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(state.value)){
            stateErr.innerText = 'No debe escribir caracteres especiales'
        }else if(state.value ==''){
            stateErr.innerText = 'Debe completar este campo'
        } else if (!regUpp.test(state.value) ){
            stateErr.innerText = 'Debe iniciar con mayuscula'
        }else if(state.value.length<3){
            stateErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            stateErr.innerText= ''
            stateTest=true
        };

        //validacion departamento
        if(regNum.test(city.value)){
            cityErr.innerText = 'No debe escribir números'
        }else if(regSpecial.test(city.value)){
            cityErr.innerText = 'No debe escribir caracteres especiales'
        }else if(city.value ==''){
            cityErr.innerText = 'Debe completar este campo'
        }else if (!regUpp.test(city.value) ){
            cityErr.innerText = 'Debe iniciar con mayuscula'
        }else if(city.value.length<3){
            cityErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            cityErr.innerText= ''
            cityTest=true
        };

        //validacion calle
        if(regNum.test(street.value)){
            streetErr.innerText = 'No debe escribir números'
        }else if(street.value ==''){
            streetErr.innerText = 'Debe completar este campo'
        }else if(regSpecial.test(street.value)){
            streetErr.innerText = 'No debe escribir caracteres especiales'
        }else if (!regUpp.test(street.value) ){
            streetErr.innerText = 'Debe iniciar con mayuscula'
        }else if(street.value.length<3){
            streetErr.innerText= 'El nombre debe tener 3 caracteres mínimo'
        }else {
            streetErr.innerText= ''
            streetTest=true
        };

        //validacion nuemeracion
        if(numeration.value ==''){
            numerationErr.innerText = 'Debe completar este campo'
        }else if(!regNum.test(numeration.value) || regSpecial.test(numeration.value) || regUpp.test(numeration.value)){
            numerationErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            numerationErr.innerText = ''
            numerationTest=true
        };

         //validacion codigo postal
        if(postalCode.value ==''){
            postalCodeErr.innerText = 'Debe completar este campo'
        }else if(!regNum.test(postalCode.value) || regSpecial.test(postalCode.value) || regUpp.test(postalCode.value)){
            postalCodeErr.innerText = 'Debe escribir números sin espacios ni paréntesis'
        }else {
            postalCodeErr.innerText = ''
            postalCodeTest=true
        }

        //si esta ok pasa
        if(countryTest && stateTest && cityTest && streetTest && numerationTest && postalCodeTest){
            //delete errors
            countryErr.innerText=''
            stateErr.innerText=''
            cityErr.innerText=''
            locationErr.innerText=''
            streetErr.innerText=''
            numerationErr.innerText=''
            secondLineErr.innerText=''
            neighborhoodErr.innerText=''
            neighborhoodBlockErr.innerText=''
            houseNumberErr.innerText=''
            postalCodeErr.innerText=''
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
        }
    });
});