var nome = prompt("qual é seu nome ?")
var idade = parseInt(prompt("qual ano você nasceu ?"))
var ano = new Date()
var anoAtual = ano.getFullYear()

var soma =  anoAtual - idade 

if (soma <= 17){
    document.write("Olá "+nome+" sua idade é "+soma+" (ou) vai  fazer ! [voce é menor de idade!]")
}
else if(soma >= 18){
    document.write("Olá "+nome+" sua idade é "+soma+" (ou) vai  fazer ! [voce é maior de idade!]")
} else if (soma >= 50){
    document.write("Olá "+nome+" sua idade é "+soma+" (ou) vai  fazer ! [voce é um idoso!]")
}else{

    document.write("IDADE INCORRETA [!ERRO!]")
}
function clicar1(){
    var a = window.document.getElementById('area1')
    a.innerText = 'Claro que acertei'
    a.style.background = 'rgb(76 118 29)'
}
function clicar2(){
    var b = window.document.getElementById('area2')     
    b.innerText = 'Está Mentindo   :)'
    b.style.background = 'rgb(76 118 29)'
    }

