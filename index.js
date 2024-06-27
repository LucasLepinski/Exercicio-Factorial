const prompt = require("prompt-sync")();

// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
    if (numero < 0) {
      return NaN; // Retorna NaN se o número for negativo
    } else if (numero === 0 || numero === 1) {
      return 1; // Fatorial de 0 e 1 é 1
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
      return fatorial;
    }
  }
  
  // Solicita ao usuário um número usando prompt
  let input = prompt('Digite um número inteiro para calcular o fatorial:');
  
  // Converte o input do usuário para um número inteiro
  let numero = parseInt(input);
  
  // Verifica se o número fornecido pelo usuário é um inteiro positivo usando isNaN
  if (isNaN(numero) || numero < 0) {
    console.log('Por favor, digite um número inteiro positivo válido.');
  } else {
    // Calcula o fatorial usando a função calcularFatorial
    let resultado = calcularFatorial(numero);
  
    // Exibe o resultado do cálculo do fatorial
    if (isNaN(resultado)) {
      console.log('Não é possível calcular o fatorial de um número negativo.');
    } else {
      console.log(`O fatorial de ${numero} é: ${resultado}`);
    }
  }
  

