import { combineReducers } from 'redux';

import Theme from './Theme';
import Events from './Events'
import Applets from './Applets'
import Music from './Music'
import Albums from './Albums'

export default combineReducers({
  Theme,
  Events,
  Applets,
  Music,
  Albums,
})