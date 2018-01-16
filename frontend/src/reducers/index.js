import { CHANGE_LANGUAGE, CHANGE_THEME, UPDATE_OUTPUT } from '../constants';

const initialState = {
    language: 'C++',
    theme: 'Material',
    output: ''
}

export default function(state = initialState, action){
        switch(action.type){
            case CHANGE_LANGUAGE:
                
                return Object.assign({},state,{
                    language: action.language
                });
            case CHANGE_THEME:

                return Object.assign({},state,{
                    theme: action.theme
                });

            case UPDATE_OUTPUT:
                return Object.assign({},state,{
                    output: action.output
                });
            default:
                return state;
        }
}