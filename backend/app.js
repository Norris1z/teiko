const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const RequestParser = require('./src/RequestParser');
const CodeHandler = require('./src/CodeHandler');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());

app.post('/compile',async function(request,response){
    let parsedCode = RequestParser.parse(request.body);
    try{
        let compiledCode = await CodeHandler.response(parsedCode);
        if(compiledCode.output){
            response.json(compiledCode.output);
        }else{
            //load file and read to screen
            const asm = fs.createReadStream(compiledCode.filename);
            // asm.pipe(response);
            asm.on('data',(data)=>{
                response.json(data.toString('utf-8'));
            });
        }
        
    }catch(e){
        response.json(e);
    }
    
});

app.listen(process.env.PORT || 8000);