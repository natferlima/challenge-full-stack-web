const express = require('express');
const { userRouter } = require('./routes');

const app = express();

app.use('/user', userRouter);

const PORT = 3001;
app.listen(3001, () => {
    console.log("API running on PORT:", PORT);
});