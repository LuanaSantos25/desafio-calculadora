console.log("****Calculadora de partidas Rankeadas****");
console.log(" **Seja bem vindo, consulte seu Rank**");

function SomarRank(qntVitorias, qntsDerrotas){
    Rank = qntVitorias - qntsDerrotas
    return Rank;
}

 let Nivelvitorias;
 let SaldoRanqueada = SomarRank(81, 1);

switch(true){
    case SaldoRanqueada < 10: 
        Nivelvitorias = "ferro"; 
        b0reak
    case SaldoRanqueada >= 11 && SaldoRanqueada <= 20:
         Nivelvitorias = "bronze";
        break
    case SaldoRanqueada >= 21 && SaldoRanqueada <= 50: 
        Nivelvitorias = "prata";
        break
    case SaldoRanqueada >= 51 && SaldoRanqueada <= 80:
        Nivelvitorias = "ouro";
        break
    case SaldoRanqueada >= 81 && SaldoRanqueada <= 90:
        Nivelvitorias = "diamante";
        break
    case SaldoRanqueada >= 91 && SaldoRanqueada <= 100:
        Nivelvitorias = "lendario";
        break
    case SaldoRanqueada >= 101: 
        Nivelvitorias = "imortal";
        break
    default: 
        console.log(" rank invalido ");
        break
}  

console.log(" O Heroi acumulou um total de:" + SaldoRanqueada, "pontos o Heroi esta no nivel: " +  Nivelvitorias);