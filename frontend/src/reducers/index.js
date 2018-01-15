import { CHANGE_LANGUAGE, CHANGE_THEME } from '../constants';

const initialState = {
    language: 'C++',
    theme: 'Material'
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
            default:
                return state;
        }
}