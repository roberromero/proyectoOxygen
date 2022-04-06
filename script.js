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