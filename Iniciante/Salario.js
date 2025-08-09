let funcionaro = 25;
let trabalhadas = 5;
let hora = 85.50;


function Salario( _numero_funcionaro,horas_trabalhadas, valor_hora)
{
    
    let salario = horas_trabalhadas * valor_hora;
    return salario.toFixed(2);
}
console.log(`NUMBER = ${funcionaro}`);
console.log(`SALARY = U$ ${Salario(trabalhadas , hora)}`);