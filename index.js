const express = require('express');

const app = express();

app.get('/sign', (request, response) => {
    response.send('Carpicorn, but this is static :)');
});

app.listen(3000, () => console.log('Listening your sign im port 3000...'));
