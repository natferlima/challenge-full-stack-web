const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello!');
})

const PORT = 3001;
app.listen(3001, () => {
    console.log("API running on PORT:", PORT);
});