const express = require('express');
const chalk = require('chalk');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello Node Js!');
});

app.listen(PORT, () => {
    if(error) {
        console.log(chalk.red(error));
    } else {
        console.log(chalk.green(`** Development Server is listening on localhost:${PORT}, open your browser on http://localhost:${PORT}/ **`));
    }
});