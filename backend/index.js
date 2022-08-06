const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { userRouter } = require('./routes');
const { studentRouter } = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/student', studentRouter)

const PORT = 3001;
app.listen(3001, () => {
    console.log("API running on PORT:", PORT);
});

module.exports = app;