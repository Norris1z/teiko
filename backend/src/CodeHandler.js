const Compilers = require('./Compilers');


class CodeHandler{
    response(data){
        const {language,code} = data;

        if(!Compilers.supportsLanguage(language)){
            return {error: `Sorry! Teiko has no support for ${language} yet.`};
        }
        return Compilers.compile(language,code);
    }
}

module.exports = new CodeHandler();