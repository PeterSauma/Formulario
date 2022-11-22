window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los imputs
    let file=formulario.file

    //Capturo todos los divs con text danger que van a aparecer cuando valide
    let  fileErr =document.querySelector('#fileErr')


    
    //Validacion del file. Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)
    file.addEventListener('change', function(){

        //Expresión regular para validar tipos de archivos
        let extPermitidas = /(.JPG|.JPEG|.PNG|.GIF)$/i
        //Genero la variable archivoRuta para que sea más facil de leer el if
        let archivoRuta = file.value

        //Valido si me da un true o false el tipo de archivo
        if(!extPermitidas.exec(archivoRuta)){
        fileErr.innerText = 'Archivos permitidos: JPG, JPEG, PNG, GIF'
        }else {
        fileErr.innerText = ''
        }

        //agrego la leyenda con el nombre del archivo que se está po subir
        let namePhoto=document.querySelector('#namePhoto')
        namePhoto.innerText=file.files[0].name

    });


})