function clicou(){
    document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar</i>";    
    //alert("Obrigado por clicar")
}

function redirecionar(){
    //window.open("https://www.google.com/");
    window.location.href = "https://www.google.com/"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("trocar texto");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function load(){
    alert("Página carregada")
}*/

/*function soma(n1, n2){
    return n1 + n2;
}

var validar;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}


var idade = prompt("Qual a sua idade");
validaIdade(idade);
console.log(validar);*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/

/*var d = new Date();
alert(d.getMinutes())*/

/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
};*/

/*var count = 0;
while (count < 5){
    console.log(count);
    count++;
}*/

/*var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/


/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxo"}];
console.log(frutas);
alert(frutas[1].cor);*/

/*var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Leandro Nunes";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));