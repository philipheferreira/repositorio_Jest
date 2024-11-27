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




