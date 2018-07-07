const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', { title: 'My Library', list: ['a', 'b'] });
});

app.listen(PORT, () => {
  debug(chalk.green(`** Development Server is listening on localhost:${PORT}, open your browser on http://localhost:${PORT}/ **`));
});
