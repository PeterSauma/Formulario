window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')     
    
    //capturo los imputs
    let firstName=formulario.firstName
    let lastName=formulario.lastName
    

    
 

    //capturo los errores
    let firstNameErr = document.querySelector('#firstNameErr')
    let lastNameErr = document.querySelector('#lastNameErr')
   

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


})