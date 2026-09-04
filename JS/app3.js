let dia = prompt ("Escolha um dia da semana: ");
dia = Number(dia);
if (dia == 0 || dia>=8){
    alert("Dia inválido!");
}else if (dia == 1){
    alert("Você escolheu Domingo");
}else if (dia == 2){
    alert("Você escolheu Segunda-feira");
}else if (dia == 3){
    alert("Você escolheu Terça-feira");
}else if (dia == 4){
    alert("Você escolheu Quarta-feira");
}else if (dia == 5){
    alert("Você escolheu Quinta-feira");
}else if (dia == 6){
    alert("Você escolheu Sexta-feira");
}else{
    alert("Você escolheu Sábado");
}