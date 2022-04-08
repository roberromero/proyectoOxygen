// //Para asegurar que todo se ha cargado
// document.addEventListener("DOMContentLoaded", function() {
// });


//MENú DESPLEGABLE

//Declaro las variables
 let lista = document.getElementById("list");
 let menuBurger = document.getElementById("im");
 let menuEquis = document.getElementById("imEquis");

//Función desplegar el menú
const openMenu= () => {
    lista.style.display = "flex";
    menuEquis.style.display= "block";
    menuBurger.style.display= "none";
}

//Función plegar el menú
const closeMenu = () => {//DUDA PARA JOHN (COMO HACERLO PARA LLEVARMELO A CLASES)
    lista.style.display= "none";
    menuBurger.style.display= "block";
    menuEquis.style.display= "none";
}

//Cuando clicamos hamburguesa se despliega
menuBurger.addEventListener('click', openMenu);
//Cuando clicamos la equis se pliega
menuEquis.addEventListener('click', closeMenu);


//SCROLLBAR

let progressbar = document.getElementById('progressbar__inner');

    window.addEventListener('scroll', () => {
        //Obtenemos el objeto html (el objeto raíz)
        let h = document.documentElement; 
        
        //Utilizo dos formas para obtener la altura en la que nos encontramos en cada momento
        let st = h.scrollTop || document.body.scrollTop; 

        let sh = h.scrollHeight ||this.document.body.scrollHeight;
        let percent = st / (sh - h.clientHeight) * 100;
        console.log(percent);
        progressbar.style.width= `${percent}%`;
    })



//RETURNTOP BUTTON

let returnTop = document.getElementById('returnTop');

//Toma el objeto "window" y escrolea hasta la posición indicada
const returnTopFun = () => {
    window.scroll({
        top: 0,
        left: 100,
        behavior: 'smooth'//NO PARECE QUE HAGA EFECTO ¿Por qué?
      });
}
//Recibe a la función anterior y la ralentiza 200 milisegs.
const delayTop = () => {
    window.setTimeout(returnTopFun, 200);
}

//Tras click al botón flecha llama a "delayTop"
returnTop.addEventListener('click', delayTop);


//VALIDACIÓN DEL FORMULARIO

//Utilizaremos el objeto "RegExp"



//Se puede hacer de 2 formas:
//- Instanciando el objeto
let regularExp = new RegExp ("");
//- Estática (no se puede modificar durante la ejecución):
// let expRegular = /(\w+)\@(\w+)\.(\w+)$/gi;

//VARIABLES para el campo nombre y correo de los inputs
let correo = document.getElementById('correo');
let nombre = document.getElementById('fname');
let aceptar = document.getElementById('aceptar');

function introduceN(e) {
    let expRegularNombre = /^\S+[a-zA-Z]$/;
    let valueMail = e.target.value;
    if (expRegularNombre.test(valueMail)) {
        // nombre.style.borderBottom = "2px solid #55DFB4";
        nombre.classList.remove('inp', 'incorrectValues');
        nombre.classList.add('correctValues');
    }else{
        // nombre.style.borderBottom = "2px solid red";
        nombre.classList.remove('inp', 'correctValues');
        nombre.classList.add('incorrectValues');
    }
    
}

function introduceD(event) {
    let expRegularCorreo = /(\w+)\@(\w+)\.(\w+)$/gi;
    let valueMail = event.target.value;

    if(expRegularCorreo.test(valueMail)){
        // correo.style.borderBottom = "2px solid #55DFB4";
        correo.classList.remove('inp','incorrectValues');
        correo.classList.add('correctValues');
    }
    else{
        // correo.style.borderBottom = "2px solid red";
        correo.classList.remove('inp', 'correctValues');
        correo.classList.add('incorrectValues');
    }
    
}

// let labelCheckBox = document.querySelector('.last__pregform-form-formu-aceptar-checkbox');

// function introduceTick() {
//     let check= aceptar.checked;
//     if(check){
//         return true;
//     }else{
//         return false;
//     }    
// }
// aceptar.addEventListener('click', introduceTick);

correo.addEventListener('change', introduceD);
nombre.addEventListener('change', introduceN);

//RECOGER DATOS DEL FORMULARIO Y MANDÁRSELOS A UN SERVIDOR JSON de testing


document.querySelector('#formButton').addEventListener('click', ()=> {
    let valorNombre= document.getElementById('fname').value;
    let valorCorreo= document.getElementById('correo').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: valorNombre,
            correo: valorCorreo
        })
    })
      .then( response => {
        if (response.ok){
          console.log("No hubo errores");
        }else{
          console.log("Hubo un error");
        }
       return response.json()
        })  
      .then((json) => console.log(json))//Recogemos el objeto para mostrar en pantalla
      .catch((err=>{                    //Este método te devuelve el error en forma de object
          console.log(`Hubo el siguiente error:  ${err} y el tipo de dato que devuelve el método catch es: ${typeof err}`);
      }));


})







  

