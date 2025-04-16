const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const MENSAGENS_PATH = './data/mensagens.json';
const SENHA = 'admin123';

app.get('/mensagem', (req, res) => {
    fs.readFile(MENSAGENS_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler mensagem');
        res.json(JSON.parse(data));
    });
});

app.post('/atualizar', (req, res) => {
    const { mensagem, senha } = req.body;
    if (senha !== SENHA) return res.status(401).send('Senha incorreta.');
    fs.writeFile(MENSAGENS_PATH, JSON.stringify({ hoje: mensagem }, null, 2), (err) => {
        if (err) return res.status(500).send('Erro ao atualizar.');
        res.send('Mensagem atualizada com sucesso!');
    });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));