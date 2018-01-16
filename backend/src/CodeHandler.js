const Compilers = require('./Compilers');


class CodeHandler{
    response(parsedCode){
        if(parsedCode.hasOwnProperty('error')){
            return {error:parsedCode.error};
        }
        const {language,code} = parsedCode;

        if(!Compilers.supportsLanguage(language)){
            return {error: `Sorry! Teiko has no support for ${language} yet.`};
        }
        return Compilers.compile(language,code);
    }
}

module.exports = new CodeHandler();