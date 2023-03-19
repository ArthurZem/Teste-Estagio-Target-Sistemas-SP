function fibonacci(number) {
  let fib1 = 0, fib2 = 1, proximo;
  
  while (fib2 < number) {
    proximo = fib1 + fib2;
    fib1 = fib2;
    fib2 = proximo;
  }

  return fib2 === number;
}

const num1 = 8; // número pré definido para ter resultado verdadeiro
const num2 = 10; // número pré definido para ter resultado falso

console.log(`O número ${num1} pertence à sequência de Fibonacci? ${fibonacci(num1)}`); // chamada da função fibonacci passando o num1(8) como parâmetro
console.log(`O número ${num2} pertence à sequência de Fibonacci? ${fibonacci(num2)}`); // chamada da função fibonacci passando o num1(8) como parâmetro