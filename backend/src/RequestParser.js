function requestParser(request){
        if(!request.hasOwnProperty('language')){
            return {error: 'Requests must contain a language property'};
        }

        if(!request.hasOwnProperty('code')){
            return {error: 'Requests must have a code property'};
        }

        return {language: request.language,code: request.code}
    }

module.exports = requestParser