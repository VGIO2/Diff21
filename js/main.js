  
function calcular(){
    var n= document.getElementById("n");
    var psalida = document.getElementById("salida");
    var diff;
    
    var varn=n.value;

if(varn<21){
    diff=21-varn;
    psalida.innerHTML=diff;
    
}
else{
    diff=(varn-21)*2;
    psalida.innerHTML=diff;
}
}