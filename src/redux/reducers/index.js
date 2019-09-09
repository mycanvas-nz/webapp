import { combineReducers } from 'redux';

import Theme from './Theme';
import Events from './Events'
import Applets from './Applets'
import Music from './Music'

export default combineReducers({
  Theme,
  Events,
  Applets,
  Music,
})