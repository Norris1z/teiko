const supported_languages = ['php','c++'];

const list_of_compilers = {
    'c++':{
        'compiler': require('../compilers/cpp/CppCompiler')
    }
};


class Compilers{
    supportsLanguage(language){
        return supported_languages.includes(language.toLowerCase());
    }

    compile(language,code){
        //returns a promise
        return list_of_compilers[language].compiler.compile(code);
    }
}

module.exports = new Compilers();