const Compilers = require('./Compilers');


class CodeHandler{
    response(parsedCode){
        return new Promise((resolve,reject)=>{
            if(parsedCode.hasOwnProperty('error')){
                reject({error:parsedCode.error});
            }
            const {language,code} = parsedCode;
    
            if(!Compilers.supportsLanguage(language)){
                reject({error: `Sorry! Teiko has no support for ${language} yet.`});
            }
            resolve(Compilers.compile(language,code));
        });
    }
}

module.exports = new CodeHandler();