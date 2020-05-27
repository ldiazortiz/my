let ubicacionPrincipal = window.pageYOffset; //dice en que parte de la pagina estoy

//Este codigo es de https://michalsnik.github.io/aos/

  AOS.init();


window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual;
    
})

/*Menu*/

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semafaro= false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semafaro = true;
    }
    
    enlacesHeader.classList.toggle("menudos")
})