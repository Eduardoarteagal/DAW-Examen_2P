const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const propietariosRouter = require('./routes/propietarios');
const edificiosRouter = require('./routes/edificios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/propietarios', propietariosRouter);
app.use('/api/edificios', edificiosRouter);

app.listen(3000, () => {
  console.log('API is running on port 3000');
});
