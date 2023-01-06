
const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const lancamento ="1 Dec 2023"

function countDown() {
   const dataLanc = new Date(lancamento);
   const hoje = new Date ();
    // Resultado em milisegundos /1000 para converter para segundos
   const segTotal = (dataLanc-hoje)/1000;
    // Convertendo em horas
   const finalDias = Math.floor(((segTotal/60)/60)/24);
   // Convertendo o resto das horas em minutos  (%)
   const finalHoras = Math.floor (((segTotal/60)/60) % 24);
   // Convertendo em minutos o resto das horas (%)
   const finalMinutos = Math.floor((segTotal/60) % 60);
   // Convertendo em segundos o resto dos minutos (%)
   const finalSegundos = Math.floor((segTotal) % 60);
    dia.innerHTML = finalDias + 'D';
    hora.innerHTML = formatoTempo(finalHoras)+'H';
    minuto.innerHTML = formatoTempo(finalMinutos)+'M';
    segundo.innerHTML = formatoTempo(finalSegundos)+'S';    
}

function formatoTempo(tempo){
    //formato reduzido expressão if 
    return tempo <10? `0${tempo}`:tempo;

}

countDown();
setInterval(countDown, 1000)