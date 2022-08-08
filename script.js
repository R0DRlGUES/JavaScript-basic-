//Adicionar 10 Número e mostrar somente os Números pares.
let inputRes = document.querySelector('#inputRes');
let btAdd = document.querySelector('#btAdd');
let btExibir = document.querySelector('#btExibir');
let resposta = document.querySelector('#resposta');

let arrayVet =[];
let cont =0;

function a(){
    if(cont<10){
        arrayVet.push(Number(inputRes.value));
        inputRes.value='';
        cont++

    }
}
function b(){
    let aux='';
    for(let i=0; i<arrayVet.length; i++){
        if(arrayVet[i]%2===0){
            
            aux += arrayVet[i]+'<br>';
         
        }
    }
    resposta.innerHTML=aux;
}
btAdd.onclick=function(){a();}
btExibir.onclick=function(){b();}