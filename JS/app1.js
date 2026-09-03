let Anonasc = Number(prompt("Digite o ano de nascimento:"));
let mesnasc = Number(prompt("Digite o mês de nascimento:"));
let dianasc = Number(prompt("Digite o dia de nascimento:"));



function calcMaiorIdade(ano = 2026, mes = 9, dia = 2){
    let idade = ano - Anonasc;

if (idade >= 18) {
    alert("Você é maior de idade!");
}else if(idade < 18){
    alert("Você é menor de idade!");
}else{
    if (mesnasc > 9 ||(mesnasc == 9 && dianasc > 2)) {
        idade = idade - 1;
    }
}
}

