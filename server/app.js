const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
    preflightContinue: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.static(path.join(__dirname, '../web/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../web/dist/index.html'));
});

app.post('/registration', (req, res) => {
  const { email, personType, name, cpf, birthDate, phone, companyName, cnpj, openingDate, password } = req.body;
  if (!email || !personType || !phone || !password) {
    return res.status(400).json({ message: 'Dados inválidos!' });
  }

  if(personType === 1 && (!name || !cpf || !birthDate)) {
    return res.status(400).json({ message: 'Dados PF inválidos!' });
  }

  if(personType === 2 && (!companyName || !cnpj || !openingDate)) {
    return res.status(400).json({ message: 'Dados PJ inválidos!' });
  }

  return res.json({ message: 'Cadastrado com sucesso!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});