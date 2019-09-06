import { combineReducers } from 'redux';

import Theme from './Theme';
import Events from './Events'
import Applets from './Applets'

export default combineReducers({
  Theme,
  Events,
  Applets,
})