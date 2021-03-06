import {CHANGE_THEME, HIDE_NAVBAR, SHOW_NAVBAR} from '../actionTypes';

import {Theme1Colors, Theme2Colors, Theme3Colors} from '../../constants'

const Theme1 = {
    primacyColor: Theme1Colors.primacyColor,
    primacyColor2: Theme1Colors.primacyColor2,
    secondaryColor: Theme1Colors.secondaryColor,
    circColor1: Theme1Colors.circColor1,
    circColor2: Theme1Colors.circColor2,
}

const Theme2 = {
    primacyColor: Theme2Colors.primacyColor,
    primacyColor2: Theme2Colors.primacyColor2,
    secondaryColor: Theme2Colors.secondaryColor,
    circColor1: Theme2Colors.circColor1,
    circColor2: Theme2Colors.circColor2,
}

const Theme3 = {
    primacyColor: Theme3Colors.primacyColor,
    primacyColor2: Theme3Colors.primacyColor2,
    secondaryColor: Theme3Colors.secondaryColor,
    circColor1: Theme3Colors.circColor1,
    circColor2: Theme3Colors.circColor2,
}

const initState = {
    theme: Theme1,
    navbar: true,
}
  
const Theme = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            switch (action.value) {
                case "1":
                    return {
                        ...state,
                        theme: Theme1,
                    }
                case "2":
                    return {
                        ...state,
                        theme: Theme2,
                    }
                case "3":
                    return{
                        ...state,
                        theme: Theme3,
                    }
            default:
                return {
                    ...state,
                    theme: Theme1,
                }
        }
        case HIDE_NAVBAR:
            return {
                ...state,
                navbar: false,
            }
        case SHOW_NAVBAR: 
            return {
                ...state,
                navbar: true,
            }
        default:
            return state
    }
}

export default Theme
  