const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88
const ES = 27165.48
const Outros = 19849.53;

const total = SP + RJ + MG + ES + Outros;

const percentualSP = (SP / total) * 100;
const percentualRJ = (RJ / total) * 100;
const percentualMG = (MG / total) * 100;
const percentualES = (ES / total) * 100;
const percentualOutros = (Outros / total) * 100;

console.log(`Percentual de representação de SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual de representação de RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual de representação de MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual de representação de ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual de representação de Outros: ${percentualOutros.toFixed(2)}%`);