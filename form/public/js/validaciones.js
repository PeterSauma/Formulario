window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los imputs
    let avatar=formulario.avatar

    //Capturo todos los divs con text danger que van a aparecer cuando valide
    let  avatarErr =document.querySelector('#avatarErr')


    
    //Validacion del avatar. Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)
    avatar.addEventListener('change', function(){

        //Expresión regular para validar tipos de archivos
        let extPermitidas = /(.JPG|.JPEG|.PNG|.GIF)$/i
        //Genero la variable archivoRuta para que sea más facil de leer el if
        let archivoRuta = avatar.value

        //Valido si me da un true o false el tipo de archivo
        if(!extPermitidas.exec(archivoRuta)){
        avatarErr.innerText = 'Archivos permitidos: JPG, JPEG, PNG, GIF'
        }else {
        avatarErr.innerText = ''
        }

        //agrego la leyenda con el nombre del archivo que se está po subir
        let namePhoto=document.querySelector('#namePhoto')
        namePhoto.innerText=avatar.files[0].name

    });


})