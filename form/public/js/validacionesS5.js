window.addEventListener('load', function(){
    //Capturo el formulario  completo
    let formulario = document.querySelector('#formNewDataMembers')
    
    //capturo los sections
    let contact=document.getElementById('contact')
    let grownup=document.getElementById('grownup')
    let smallGroup=document.getElementById('smallGroup')

    //capturo los botones de continuar y atras
    let btnGrownupContinue=document.getElementById('btnGrownupContinue')
    let btnGrownupBack=document.getElementById('btnGrownupBack')

    //capturo los modals
    let modalContact=document.querySelector('.modalContact')
    let modalGrownup=document.querySelector('.modalGrownup')
    let modalSmallGroup=document.querySelector('.modalSmallGroup')

    //capturo los contenedor
    let contenedorContact=document.querySelector('.contenedorContact')
    let contenedorGrownup=document.querySelector('.contenedorGrownup')
    let contenedorSmallGroup=document.querySelector('.contenedorSmallGroup')
    
    //capturo los imputs 
    let liveChurchCheck=document.querySelectorAll('.liveChurch') // type='radio' class='webSite'
    let timeChurchCheck=document.querySelectorAll('.timeChurch') // type='radio' class='webSite'
    let churchExperiencesCheck=document.querySelectorAll('.churchExperiences') // type='radio' class='webSite'
    let servicesUsedCheck=document.querySelectorAll('.servicesUsed') // type='radio' class='webSite'

    //capturo los errores
    let liveChurchErr = document.querySelector('#liveChurchErr')
    let timeChurchErr = document.querySelector('#timeChurchErr')
    let churchExperiencesErr = document.querySelector('#churchExperiencesErr')
    let servicesUsedErr = document.querySelector('#servicesUsedErr')

    //Creo las variables false para validar
    let liveChurch = false 
    let timeChurch = false 
    let churchExperiences = false 
    let servicesUsed = false 


    //Creo las variables false para radio y checkbox

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VALIDACIONES GROWNUP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    /*>>>>>>>>>> botones Grownup <<<<<<<<<<*/
    btnGrownupBack.addEventListener('click',function(){
        //validacion presencial/virtual
        liveChurchCheck.forEach((e)=>{
            if(e.checked){
                liveChurch= true
            }
        });
        if(!liveChurch){
            liveChurchErr.innerText='Debe completar este campo'
        }else{
            liveChurchErr.innerText=''
        };
        
        //validacion tiempo de asistencia
        timeChurchCheck.forEach((e)=>{
            if(e.checked){
                timeChurch= true
            }
        });
        if(!timeChurch){
            timeChurchErr.innerText='Debe completar este campo'
        }else{
            timeChurchErr.innerText=''
        };
        
        //validacion experiencias completadas
        churchExperiencesCheck.forEach((e)=>{
            if(e.checked){
                churchExperiences= true
            }
        });
        if(!churchExperiences){
            churchExperiencesErr.innerText='Debe completar este campo'
        }else{
            churchExperiencesErr.innerText=''
        };

        //validacion servicios usados
        servicesUsedCheck.forEach((e)=>{
            if(e.checked){
                servicesUsed= true
            }
        });
        if(!servicesUsed){
            servicesUsedErr.innerText='Debe completar este campo'
        }else{
            servicesUsedErr.innerText=''
        };

        //si todo esta ok pasa
        if (liveChurch && timeChurch && churchExperiences && servicesUsed){
            //delete errors
            liveChurchErr.innerText = ''
            timeChurchErr.innerText = ''
            churchExperiencesErr.innerText = ''
            servicesUsedErr.innerText = ''
        
            //grownup donw
            grownup.style.display='none'
            modalGrownup.style.opacity='0'
            modalGrownup.style.visibility='hidden'
            contenedorGrownup.style.transform='translateY(-30%)'
            modalGrownup.style.transition='all 2s ease'

            //contact upp
            contact.style.display='flex'
            modalContact.style.opacity='1'
            modalContact.style.visibility='visible'
            contenedorContact.style.transform='translateY(0%)'
            modalContact.style.transition='all 2s ease'
            }

    });
    btnGrownupContinue.addEventListener('click',function(){
                //validacion presencial/virtual
                liveChurchCheck.forEach((e)=>{
                    if(e.checked){
                        liveChurch= true
                    }
                });
                if(!liveChurch){
                    liveChurchErr.innerText='Debe completar este campo'
                }else{
                    liveChurchErr.innerText=''
                };
                
                //validacion tiempo de asistencia
                timeChurchCheck.forEach((e)=>{
                    if(e.checked){
                        timeChurch= true
                    }
                });
                if(!timeChurch){
                    timeChurchErr.innerText='Debe completar este campo'
                }else{
                    timeChurchErr.innerText=''
                };
                
                //validacion experiencias completadas
                churchExperiencesCheck.forEach((e)=>{
                    if(e.checked){
                        churchExperiences= true
                    }
                });
                if(!churchExperiences){
                    churchExperiencesErr.innerText='Debe completar este campo'
                }else{
                    churchExperiencesErr.innerText=''
                };
                
                //validacion servicios usados
                servicesUsedCheck.forEach((e)=>{
                    if(e.checked){
                        servicesUsed= true
                    }
                });
                if(!servicesUsed){
                    servicesUsedErr.innerText='Debe completar este campo'
                }else{
                    servicesUsedErr.innerText=''
                };
        
                //si todo esta ok pasa
                if (liveChurch && timeChurch && churchExperiences && servicesUsed){
                    //delete errors
                    liveChurchErr.innerText = ''
                    timeChurchErr.innerText = ''
                    churchExperiencesErr.innerText = ''
                    servicesUsedErr.innerText = ''
        
                    //grownup donw
                    grownup.style.display='none'
                    modalGrownup.style.opacity='0'
                    modalGrownup.style.visibility='hidden'
                    contenedorGrownup.style.transform='translateY(-30%)'
                    modalGrownup.style.transition='all 2s ease'

                    //smallGroup up
                    smallGroup.style.display='flex'
                    modalSmallGroup.style.opacity='1'
                    modalSmallGroup.style.visibility='visible'
                    contenedorSmallGroup.style.transform='translateY(0%)'
                    modalSmallGroup.style.transition='all 2s ease'
                }
    });
});