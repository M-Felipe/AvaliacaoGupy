function pertenceSequenciaFibonacci(numero) {
  // Inicializando os dois primeiros números da sequência
  let fib1 = 0;
  let fib2 = 1;

  // Iterando para calcular os próximos números da sequência até ultrapassar o número informado
  while (fib2 <= numero) {
      // Verificando se o número informado pertence à sequência
      if (fib2 === numero) {
          return `${numero} pertence à sequência de Fibonacci.`;
      }

      // Calculando o próximo número da sequência
      let temp = fib2;
      fib2 = fib1 + fib2;
      fib1 = temp;
  }

  // Caso o número não seja encontrado na sequência
  return `${numero} não pertence à sequência de Fibonacci.`;
}

const numeroInformado = 21;
console.log(pertenceSequenciaFibonacci(numeroInformado));