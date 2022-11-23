window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los sections
    let vocation=document.getElementById('vocation')
    let photo=document.getElementById('photo')

    //capturo los botones de continuar y atras
    let btnPhotoContinue=document.getElementById('btnPhotoContinue')
    let btnPhotoBack=document.getElementById('btnPhotoBack')

    //capturo los modals
    let modalVocation=document.querySelector('.modalVocation')
    let modalPhoto=document.querySelector('.modalPhoto')

    //capturo los contenedor
    let contenedorVocation=document.querySelector('.contenedorVocation')
    let contenedorPhoto=document.querySelector('.contenedorPhoto')
   
    //capturo los imputs
    let file=formulario.file

    //capturo los errores
    let  fileErr =document.querySelector('#fileErr')

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES PHOTO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
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

    /*>>>>>>>>>> botones Photo <<<<<<<<<<*/
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
    });
    btnPhotoContinue.addEventListener('click',function(){
        //photo donw
        photo.style.display='none'
        modalPhoto.style.opacity='0'
        modalPhoto.style.visibility='hidden'
        contenedorPhoto.style.transform='translateY(-30%)'
        modalPhoto.style.transition='all 500ms ease'
    });


});