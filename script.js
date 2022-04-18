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



sessionStorage.setItem("seen", "0");//Variable para almacenar si el popUp se ha visto//******/

//SCROLLBAR

let progressbar = document.getElementById('progressbar__inner');
let rep = true;
    window.addEventListener('scroll', () => {
     
        //Obtenemos el objeto html (el objeto raíz)
        let h = document.documentElement; 
        
        //Utilizo dos formas para obtener la altura en la que nos encontramos en cada momento
        let st = h.scrollTop || document.body.scrollTop; 

        let sh = h.scrollHeight ||this.document.body.scrollHeight;
        let percent = st / (sh - h.clientHeight) * 100;
        
        //--LLAMAMOS A LA FUNCIÓN AL 25% (SOLO UNA VEZ)
        
        if(rep == true && Math.round(percent)==25){
            //Llamo a la función---------
           
            if(sessionStorage.getItem("seen") == "0"){
                
                popIni();
                sessionStorage.setItem("seen", "1");
            }
                 
                
        }
        //-----------------------------
        progressbar.style.width= `${percent}%`;
    })


// POPUP


// aparece tras 5 segundos o 25% scrollDown

const popUp = document.getElementById('pop'); //VENTANA COMPLETA DEL POPUP
const xPopUp = document.getElementById('x-popup'); // X PARA CERRARLO 

const popIni = ()=> {
    if(sessionStorage.getItem("seen") == "0"){
        popUp.style.visibility= "visible";
        sessionStorage.setItem("seen", "1");
    }
    
    
}

const closePopUp = () => {
    popUp.style.visibility= "hidden";
}
xPopUp.addEventListener('click', closePopUp);


if(sessionStorage.getItem("seen") == "0"){
    
    setTimeout(popIni, 5000);
}


    





//VALIDACIón DEL FORMULARIO DEL POPup
let formuPopUp = document.querySelector('#form-popup');

formuPopUp.addEventListener('submit', (e)=> {
    e.preventDefault();
    let correoPop = document.getElementById('correo-popup');
    let checkPopUp = document.getElementById('check-popup');

    if(/(\w+)\@(\w+)\.(\w+)$/gi.test(correoPop.value) && checkPopUp.checked){

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                correoPop: correoPop.value,
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
          .then((json) => console.log(json))
          .catch((err=>{                    
              console.log(`Hubo el siguiente error:  ${err} y el tipo de dato que devuelve el método catch es: ${typeof err}`);
          }));
          clearFormPopUp();
          alert("ENVIADO CON ÉXITO");
    }else{
        alert("NO COMPLETADO");
    }


} )




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
const correo = document.getElementById('correo');
const nombre = document.getElementById('fname');
const aceptar = document.getElementById('aceptar');
const expRegularNombre = /^\S+[a-zA-Z]$/;
const expRegularCorreo = /(\w+)\@(\w+)\.(\w+)$/gi;



//CAMBIO DE COLOR PARA INDICAR AL USUARIO SI EL CAMPO ES CORRECTO O NO

function introduceN(e) {
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
    return valueMail;
}

function introduceD(event) {
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

correo.addEventListener('input', introduceD); //Evento cambiado para que el color cambie en tiempo real
nombre.addEventListener('input', introduceN);


//RECOGER DATOS DEL FORMULARIO Y MANDÁRSELOS A UN SERVIDOR JSON de testing + COMPROBAR QUE NO EXISTEN ERRORES


document.querySelector('#formulario').addEventListener('submit', (event)=> {
    event.preventDefault();
     
    let nameIsValid = expRegularNombre.test(nombre.value);
    let correoIsValid = /(\w+)\@(\w+)\.(\w+)$/gi.test(correo.value);
    let checkBoxIsValid = aceptar.checked;
  
    if( nameIsValid && correoIsValid && checkBoxIsValid ){
        console.log("ENTRO");
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nombre.value,
                correo: correo.value
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
          .then((json) => console.log(json) )//Recogemos el objeto para mostrar en pantalla
          .catch((err=>{                    //Este método te devuelve el error en forma de object
              console.log(`Hubo el siguiente error:  ${err} y el tipo de dato que devuelve el método catch es: ${typeof err}`);
          }));
          const formuId= "#formulario";
          clearForm(formuId);
          document.getElementById("formButton").disabled= "true";//SOLO se puede enviar el formulario una vez
          alert("ENVIADO CON ÉXITO");
    }else{
        alert("NO ENTRÓ");//Aquí podría manipular el mensaje cuando no es correcto
        console.log("no entró");
    }

 

})

//FUNCIÓN PARA LIMPIAR EL FORMULARIO
const clearForm = (formulario) => {
    
    // let data= document.querySelector(`${formulario} input[type="text"]`);
    // let data2= document.querySelector(`${formulario} input[type="email"]`);
    // let data3= document.querySelector(`${formulario} input[type="checkbox"]`)
    // data.value = " ";
    // data2.value = " ";
    // data3.checked = false;

    //SOLO CON ESTA PROPIEDAD, FUNCIONA
    const sentConfirm = () => {
        document.querySelector('#formulario').reset();
        nombre.style.borderBottom = "1px solid #95989A";
        correo.style.borderBottom ="1px solid #95989A";
    }
    setTimeout(sentConfirm, 2000);
    
}

//FUNCIÓN PARA QUITAR EL POPUP TRAS EL ENVIO DE DATOS
const clearFormPopUp = () => {
    document.getElementById('pop').style.visibility = "hidden";
}

//CONVERSOR DE MONEDA
  
    const refPriceProf = "25";
    const refPricePrem = "60";
    
let selectCurrency = document.getElementById('selectCurrency');
selectCurrency.addEventListener('change', () => {

    fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json")
    .then( response => {
          if(response.ok){
              return response.json(); //convierte la respuesta en un objeto
          }
      })
      .then(data=> {
          //TOMAR DATOS DE LA API (TOMANDO COMO REFERENCIA LOS DOLARES)
           const valorEuro= data.usd["eur"];
           const valorPound = data.usd["gbp"];
          
            if(selectCurrency.value==1){
                changeAmount(selectCurrency.value, valorEuro );
            }else if(selectCurrency.value ==2) {
                changeAmount(selectCurrency.value, valorPound );
            }else{
                changeAmount(selectCurrency.value);
            }
          
          
      })
});  

const changeAmount = (posicion, valorCurrency) => {

//ARRAY CON SÍMBOLOS
let currencies= ["$", "€", "£"];
    //cambio a euros
    if(posicion == "1"){    
       
        const res = Math.round(refPriceProf * valorCurrency);
        const res2 = Math.round(refPricePrem * valorCurrency);
        document.getElementById('priceBasic').innerHTML = `0 ${currencies[posicion]}`;
        document.getElementById('priceProfe').innerHTML = res + ` ${currencies[posicion]}`;
        document.getElementById('pricePremium').innerHTML = res2 + ` ${currencies[posicion]}`;
        
    //cambio a libras
    }else if(posicion == "2"){

        const res = Math.round(refPriceProf * valorCurrency);
        const res2 = Math.round(refPricePrem * valorCurrency);
        document.getElementById('priceBasic').innerHTML = `${currencies[posicion]}0`;
        document.getElementById('priceProfe').innerHTML = `${currencies[posicion]}` + res  ;
        document.getElementById('pricePremium').innerHTML = `${currencies[posicion]}` + res2 ;
    //valor inicial
    }else if(posicion == "0"){
      
        document.getElementById('priceBasic').innerHTML = `${currencies[posicion]}0`;
        document.getElementById('priceProfe').innerHTML = `${currencies[posicion]}` + refPriceProf;
        document.getElementById('pricePremium').innerHTML = `${currencies[posicion]}` + refPricePrem;
    }

}
            
        
        
     //SLIDER


     const imagesSlider= document.getElementById('imagesSlider');
     imagesSlider.style.backgroundImage= "url('img/slider/slider1.jpg')"
    
    //Capturo botones
     const rightButton = document.getElementById('right-button');
     const leftButton = document.getElementById('left-button');

    //Variable para la posición actual la inicio a "0"
    let currentPosition = 0;
    //Array con imágenes
    const arrayImages = ['img/slider/slider1.jpg', 'img/slider/slider2.jpg', 'img/slider/slider3.jpg', 'img/slider/slider4.jpg'];



    const changeImg= (position) =>{
        const img = arrayImages[position]; 
        const frame = document.getElementById('imagesSlider');
        frame.style.backgroundImage = `url(${img})`;
        frame.style.transitionDuration = '1.5s';
        
    }

    const modifyBulletColor = (position) => {
        for(let i= 0; i<document.getElementsByClassName('bullets').length; i++){
            if(i !=position){
                document.getElementsByClassName('bullets')[i].style.background = "#707070";
            }else{
                document.getElementsByClassName('bullets')[i].style.background = "black";
            }
        }
    }
    const pressLeft = () => {
        // if(currentPosition==0){
        //     currentPosition = 3;
        // }else{
        //     currentPosition--;
        // }
        currentPosition==0 ? currentPosition=3 : currentPosition--;//ternary operator
        changeImg(currentPosition);
        modifyBulletColor(currentPosition);

    }
    const pressRight = () => {
        // if(currentPosition==3){
        //     currentPosition = 0;
        // }else{
        //     currentPosition++;
        // }
        currentPosition==3 ? currentPosition=0 : currentPosition++; //ternary operator
        changeImg(currentPosition);
        modifyBulletColor(currentPosition);
      
    }
    
    setInterval('pressRight()', 3000);
   

    leftButton.addEventListener('click', pressLeft);
    rightButton.addEventListener('click', pressRight);