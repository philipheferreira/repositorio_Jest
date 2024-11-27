/* USANDO MATCHERS
 O Jest usa "matchers" para que você possa testar valores de maneiras diferentes. 
*/

// MATCHERS COMUNS

//A maneira mais simples para testar um valor é com igualdade exata.

test('Dois mais dois é quatro', () => {
    expect(2 + 2).toBe(4);
})

/* 
Nesse código, expect(2 + 2) retorna um objeto de "expectativa". Você normalmente não vai fazer muito com esses 
objetos de expectativa exceto chamada "matchers" neles. Nesse código, o .toBe(4) é o "matcher". Quando Jest é
executado, ele rastreia todos os "matchers" que falharam para que possa imprimir as mensagens de erro para 
você de uma forma agradável.
*/

//toBe utiliza Object.is para testar a igualdade exata. Se você quer checar o valor de um objeto, use toEqual:

test('Atribuição de objeto', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2}); //toEqual recursivamente verifica cada campo de um objeto ou array.
});

/*
toEqual ignora as chaves de objeto com propriedas undefined, itens de array undefined, arrays dispersos ou 
incompatibilidade do tipo de objeto.
*/

// Você também pode testar o oposto de um matcher usando not:

test('adicionando números positivos não é zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });


// VERDADE 

/*
Em testes às vezes você precisa distinguir entre undefined, null e false, mas às 
vezes você não quer tratar estes de maneira diferente. Jest contém auxiliares 
que permitem você ser explícito sobre o que quer.

* toBeNull corresponde a apenas null
* toBeUndefined corresponde a apenas undefined
* toBeDefined é o oposto de toBeUndefined
* toBeTruthy combina com qualquer coisa que uma instrução if trata como verdadeiro
* toBeFalsy combina com qualquer coisa que uma instrução if trata como falso

*/

test('nulo', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

//Você deve usar o "matcher" que corresponde mais precisamente para o que você deseja que seu código faça.


