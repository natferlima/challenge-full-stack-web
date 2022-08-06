const express = require('express');
const bodyParser = require('body-parser');
const { userRouter } = require('./routes');
const { studentRouter } = require('./routes');

const app = express();
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/student', studentRouter)

const PORT = 3001;
app.listen(3001, () => {
    console.log("API running on PORT:", PORT);
});