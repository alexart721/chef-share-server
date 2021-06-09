const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const router = require('./router');

dotenv.config();
const { PORT } = process.env;

const app = express();

app
	.use(morgan('dev'))
	.use(cors())
	.use(express.json())
	.use(router)
	.get('/', (_, res) => {res.status(200).send('Hello, stranger!')})
	.listen(PORT, () => {
    console.log(`🚀 server listening on port: ${PORT}`);
  });