let dia = prompt ("Escolha um dia da semana\nSendo 1:domingo -  7:sábado");
dia = Number(dia);
switch(dia){
    case 1:
        alert("Você escolheu Domingo");
        break;
    case 2:
        alert("Você escolheu Segunda-feira");
        break;
    case 3:
        alert("Você escolheu Terça-feira");
        break;
    case 4:
        alert("Você escolheu Quarta-feira");
        break;
    case 5:
        alert("Você escolheu Quinta-feira");
        break;
    case 6:
        alert("Você escolheu Sexta-feira");
        break;
    case 7:
        alert("Você escolheu Sábado");
        break;
    default:
        alert("Dia inválido!");
}''