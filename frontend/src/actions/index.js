import { CHANGE_LANGUAGE, CHANGE_THEME, UPDATE_OUTPUT } from '../constants';

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
    };
}

export const updateOutput = function(output) {
    return {
        type: UPDATE_OUTPUT,
        output
    };
}