

function converter (){
    let n1 =parseInt(document.querySelector("#valor").value)
    let operation = document.querySelector("select").value
    let resultado = document.querySelector("#resultado")
    let calculo = 0
    
   switch(operation){
    case'dolar':
    calculo = n1*5.668
    resultado.innerHTML = calculo
    break
    case'euro':
    calculo = n1*6.2
    resultado.innerHTML = calculo
    break
    case'bitcoin':
    calculo = n1*0.0000032
    resultado.innerHTML = calculo
    break
   }

     
}