
const logo = document.getElementById('logo');
const animeTitolo1 = document.getElementById("titolo");
const titolo2 =animeTitolo1

//animazione inizio
logo.style.transform = 'rotate3d(0, 0, 1, 360deg)';
//tempo di avvio animazione
setTimeout(animetitolo1, 3000);
setTimeout(rientrotitolo1, 6000);
setTimeout(animetitolo2, 9000 )

//entrate ed uscite titoli
function animetitolo1 (){
    animeTitolo1.style.transform="translateX(10%)";
}

function rientrotitolo1 (){
    animeTitolo1.style.transform="translateX(-200%)";
   
   
}
function animetitolo2 (){
    titolo2.style.transform="translateX(10%)";
    cambiotitolo2();
}

//cambiotitoli

function cambiotitolo2 () {
    titolo2.innerHTML="Qui troverete la nostra community"
    titolo2.style.color="red";

}