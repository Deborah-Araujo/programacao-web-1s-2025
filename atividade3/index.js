//Importando calculadora e suas funções
const impcalculadora = require('./util/calculadora')

//Importando framework Express
const impexpress = require('express')

//Executando express
const app = impexpress()

app.get('/', (req, res)=> {
    res.send('Olá! Faça operações matemáticas da seguinte forma: na URL, em frente ao "8080", digite a operação desejada e os números. Ex: /somar/1/1')
})

app.get('/somar/:a/:b', (req, res)=> {
    res.send(`O resultado é: ${impcalculadora.somar(req.params.a, req.params.b)}`)
})

app.get('/subtrair/:a/:b', (req, res)=> {
    res.send(`O resultado é: ${impcalculadora.subtrair(req.params.a, req.params.b)}`)
})

app.get('/multiplicar/:a/:b', (req, res)=> {
    res.send(`O resultado é: ${impcalculadora.multiplicar(req.params.a, req.params.b)}`)
})

app.get('/dividir/:a/:b', (req, res)=> {
    res.send(`O resultado é: ${impcalculadora.dividir(req.params.a, req.params.b)}`)
})

const PORT = 8080

app.use((req, res) => {
    res.status(404).send('Erro: esse caminho não existe!');
});

app.listen(PORT, ()=> {
    console.log('rodou na porta ' + PORT);
});