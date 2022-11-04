let name = document.getElementById('name');
let primeraNota = document.getElementById.value('Nota1');
let segundaNota = document.getElementById.value('Nota2');
let terceraNota = document.getElementById.value('Nota2');

function calcular(){
let promedio = primeraNota + segundaNota;
let notaFinal=promedio + terceraNota;
if (notaFinal>4.5){
document.write("eres un estudiante exelente, sigue asi")
}else if (notaFinal>3.5 && notaFinal<4.5){
    document.write("eres un estudiante muy bueno,aun puedes mejorar")}else if(notaFinal>2 && notaFinal<3.4){
        document.write("lastimosamente perdiste la materia pero puedes recuperarla :-D")
    }else if(notaFinal<=2){
        document.write("lastimosamente perdiste la materia esfuerzate mas para la proxima ಥ_ಥ")
    }
}