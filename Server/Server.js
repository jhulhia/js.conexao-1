// server.js
import express, { text } from 'express';   
import cors from 'cors';
import { formatPostcssSourceMap } from 'vite';

//const express = require('express');
//const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post ('/api/login', (req, res) => {
 const{ usuario, senha } = req.body;

 if (usuario === 'admin' && senha ==='1234') {
 res.json({ status: 'sucesso', mensagem: 'Login realizado com sucesso!' });
 } else {
res.json({ status:'erro', mensagem: 'Usuário ousenha inválidos.'});
 }
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));