const express = require('express');
const path = require('path');

const app = express();

app.use((req, res) => res.sendFile(path.resolve('./src/project.html')));

app.listen(3101, () => console.log('Listening at port 3101'));