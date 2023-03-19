const fs = require('fs');

const arquivoJSON = fs.readFileSync('dados.json');
const faturamentoDiario = JSON.parse(arquivoJSON);
console.log(faturamentoDiario);

let faturamentoMenor = faturamentoDiario[0].valor;
let faturamentoMaior = faturamentoDiario[0].valor;

// Menor e maior valores
for(let i=1; i < faturamentoDiario.length; i++){
    if(faturamentoDiario[i].valor > 0 && faturamentoDiario[i].valor < faturamentoMenor){
        faturamentoMenor = faturamentoDiario[i].valor;
    }
    if(faturamentoDiario[i].valor > faturamentoMaior){
        faturamentoMaior = faturamentoDiario[i].valor;
    }
}

// Média dos valores

let total = 0;
let dias = 0;

for(let i=0 ;i<faturamentoDiario.length; i++){
    if(faturamentoDiario[i].valor > 0){
        total += faturamentoDiario[i].valor;
        dias++;
    }
}

const media = total/dias;

let diasAcimaDaMedia = 0;
for(let i = 0; i< faturamentoDiario.length; i++){
    if(faturamentoDiario[i].valor > media){
        diasAcimaDaMedia++;
    }
}

console.log(`Menor faturamento diário: R$ ${faturamentoMenor}`);
console.log(`Maior faturamento diário: R$ ${faturamentoMaior}`);
console.log(`Número de dias com faturamento diário acima da média: ${diasAcimaDaMedia}`);
