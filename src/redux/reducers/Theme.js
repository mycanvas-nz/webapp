import {CHANGE_THEME} from '../actionTypes';

import {Theme1Colors, Theme2Colors, Theme3Colors} from '../../constants'

const Theme1 = {
    primacyColor: Theme1Colors.primacyColor,
    primacyColor2: Theme1Colors.primacyColor2,
    secondaryColor: Theme1Colors.secondaryColor,
}

const Theme2 = {
    primacyColor: Theme2Colors.primacyColor,
    primacyColor2: Theme2Colors.primacyColor2,
    secondaryColor: Theme2Colors.secondaryColor,
}

const Theme3 = {
    primacyColor: Theme3Colors.primacyColor,
    primacyColor2: Theme3Colors.primacyColor2,
    secondaryColor: Theme3Colors.secondaryColor,
}

const initState = {
    theme: Theme1,
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
            
        default:
            return state
    }
}

export default Theme
  