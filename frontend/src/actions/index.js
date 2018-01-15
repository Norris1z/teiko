import { CHANGE_LANGUAGE, CHANGE_THEME } from '../constants';

export const changeLanguage = function(language) {
    return {
        type: CHANGE_LANGUAGE,
        language
    };
}

export const changeTheme = function(theme) {
    return {
        type: CHANGE_THEME,
        theme
    }
}