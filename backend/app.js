const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const requestParser = require('./src/RequestParser');
const CodeHandler = require('./src/CodeHandler');

app.use(cors());
app.use(bodyParser.json());

app.post('/compile',function(request, response){
    const data = requestParser(request.body);
    if( data.error){
    	return response.json(data);
    }
    const compiledCode = CodeHandler.response(data);
    return response.json(compiledCode);
});

app.listen(process.env.PORT || 8000);