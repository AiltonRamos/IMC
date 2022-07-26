const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');

const inputName = document.querySelector("#nome");
console.log(inputName);

inputName.addEventListener("keypress", function(a){//função anônima
    const keyCode = (a.keyCode ? a.keyCode : a.wich);
    //cada tecla tem 1 id, o wich direciona um número que é a tecla enviada.

    //das teclas 47 + ao - 58 = são números
    //console.log(keyCode);
    if(keyCode > 47 && keyCode < 58){
        a.preventDefault();//vai ignorar o que está no if.
    }
});

// function formatar(mascara, documento){
//     var i = documento.value.length;
//     var saida = mascara.substring(0,1);
//     var texto = mascara.substring(i);

//     if(texto.substring(0,1) != saida){
//         documento.value += texto.substring(0,2);
//     }
// }

//alert(resultado);//as constantes são objetos e não o conteúdo ou propriedades do objeto.

function imc () {
    //alert ('teste-click');
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        valorIMC = (peso / (altura * altura)).toFixed(1);

        const btn1 = document.querySelector("#calcular");
        btn1.style.backgroundColor = "rgb(17, 232, 74)";
        btn1.innerHTML = "Limpar campos";
    } else {
    //resultado.textContent = "Preencha todos os campos!";
    alert("Por favor, preencha todos os campos para calcular seu IMC...");
    }

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25){
            classificacao = 'com peso ideal.';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade gra III. Cuidado!';
        }

        //passar os valores para dentro da div.
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
}

calcular.addEventListener('click', imc);


//Usando enter
document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        // console.log("Apertou o enter");
        //seleciona o elemento
        const btn = document.querySelector("#calcular");

        //adiciona o estilo
        //btn.style.backgroundColor = "rgb(17, 232, 74)";
        //vários estilos
        // btn.style.cssText = "color: blue; background-color: rgb(17, 232, 74)";
        btn.click();

        //btn.innerHTML = "Limpar campos";
    }
});


    //Usando o click no botão
    // const btn1 = document.querySelector("#calcular");
    
    // btn1.addEventListener("click", function(){
    // // const btn1 = document.querySelector("#calcular");
    // // btn1.style.backgroundColor = "rgb(17, 232, 74)";

    // // btn1.innerHTML = "Limpar campos";
    // });
    



// const dbbtn = document.querySelector("");
//     dbbtn.addEventListener("dbclick", function(){
//     dbbtn.style.background = "#000";
//     dbbtn.innerHTML = "Calcular";
// });