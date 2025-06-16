// TESTANDO CÓDIGO ASSÍNCRONO 

/* 

É comum em JavaScript executar código de forma assíncrona. Quando você 
tiver o código que é executado de forma assíncrona, Jest precisa saber 
quando o código que está testando for concluído, antes que possa passar 
para outro teste. Jest tem várias maneiras de lidar com isso.

*/


test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    })
})


// ASYNC/AWAIT

/* 

Como alternativa, você pode usar async e await em seus testes. 
Para escrever um teste assíncrono, basta usar a palavra-chave 
async na frente da função passada para test. Por exemplo, o mesmo
 cenário de fetchData pode ser testado com:

*/

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (error) {
      expect(error).toMatch('error');
    }
  });

// Você pode combinar async e await com .resolves ou .rejects.

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
  });

//Nestes casos, async e await são efetivamente apenas uma sintaxe mais simples da mesma lógica dos exemplos de uso de promessas.


/*

Se você espera que a promessa seja rejeitada, use o método .catch. 
Se certifique de adicionar expect.assertions para verificar que um
certo número de afirmações são chamadas. Otherwise, a fulfilled promise
would not fail the test.

*/


test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(error => expect(error).toMatch('error'));
  });

