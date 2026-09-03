let num = Number(prompt("Digite um número:"));
if (num % 2 == 0) {
    alert(`${num} é par!`);
}else if (num == 0){
    alert(`${num} é zero!`);
}else{
    alert(`${num} é ímpar!`);
}

let dia  = prompt("Escolha um dia da semana\nSendo 1:domingo -  7:sábado")
dia = Number(dia);

if(dia <= 0 || dia >= 8){
    alert("Dia inválido!");
}