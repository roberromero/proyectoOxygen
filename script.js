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

    window.addEventListener('scroll', function () {
        let h = document.documentElement;
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

//expresión regular para el nombre -> ^[a-zA-Z]{2,200}$
//expresión regular para el correo -> /(\w+)\@(\w+)\.(\w+)$/gi