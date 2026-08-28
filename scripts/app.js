alert("olá mundo!");

var nasc = 1991;
let nome = "Pedrina";
const viva = true;
let altura = 1.64;

function calcIdade(ano=2026){

    let idade = ano - nasc
    alert(`Dentro da função - idade ${idade}`)
    

    if (idade < 18){
         menor = true;
         var podebeber = false;
    }else{
         menor = false
         var podebeber = true
    }
    alert(`${nome} pe menor de idade? ${menor}\nIdade:${idade}`)
    return idade;
}
calcIdade();
alert(`Pode beber: ${podebeber}`)

/*alert(`Fora da função : chamando calcIdade : ${calcIdade(2027)}`) 
dá erro , pois a variável let não existe fora do escopo dela
*/ 

alert(`Fora da função : chamando calcIdade : ${calcIdade(2027)}`)