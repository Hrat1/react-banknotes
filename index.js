const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hrat:D5s4Q357a159O@cluster0-l01mn.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true}).then(() => console.log("DB Connected"))
                            .catch(err => console.error(err));



app.get('/', (req, res) => {
    res.send('Hello World')
});


app.listen(5000);