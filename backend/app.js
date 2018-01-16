const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const RequestParser = require('./src/RequestParser');
const CodeHandler = require('./src/CodeHandler');

app.use(cors());
app.use(bodyParser.json());

app.post('/compile',function(request,response){
    let parsedCode = RequestParser.parse(request.body);
    let compiledCode = CodeHandler.response(parsedCode);
    response.json(compiledCode);
});

app.listen(process.env.PORT || 8000);