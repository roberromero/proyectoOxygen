//Para asegurar que todo se ha cargado
document.addEventListener("DOMContentLoaded", function() {



//MENú DESPLEGABLE

//Declaro las variables
 let lista = document.getElementById("list");
 let menuBurger = document.getElementById("im");
 let menuEquis = document.getElementById("imEquis");

//Función desplegar el menú
const openMenu= () => {
    lista.style.display= "flex";
    menuBurger.style.display= "none";
    menuEquis.style.display= "block";
}

//Función plegar el menú
const closeMenu = () => {
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
});


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

let correo = document.getElementById('correo');
let nombre = document.getElementById('fname');

function introduceD(event) {
    let expRegularCorreo = /(\w+)\@(\w+)\.(\w+)$/gi;
    let valueMail = event.target.value;

    if(expRegularCorreo.test(valueMail)){
        correo.style.borderBottom = "2px solid #55DFB4";
    }
    else{
        correo.style.borderBottom = "2px solid red";
    }
}

function introduceN(e) {
    let expRegularNombre = /^\S+[a-zA-Z]$/;
    let valueMail = e.target.value;
    if (expRegularNombre.test(valueMail)) {
        nombre.style.borderBottom = "2px solid #55DFB4";
    }else{
        nombre.style.borderBottom = "2px solid red";
    }
}
correo.addEventListener('change', introduceD);
nombre.addEventListener('change', introduceN);


correo.addEventListener('keypress',introduceD());
