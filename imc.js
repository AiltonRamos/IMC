const calcular = document.getElementById('calcular');

//alert(resultado);//as constantes são objetos e não o conteúdo ou propriedades do objeto.

function imc () {
    //alert ('teste-click');
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        valorIMC = (peso / (altura * altura)).toFixed(1);
    } else {
        resultado.textContent = "Preencha todos os campos!";
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
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
  
}

calcular.addEventListener('click', imc);
//ficar escutando, quando alguém clicar, executar a função

