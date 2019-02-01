import { combineReducers } from 'redux';
import UIreducer from './UIreducer';
import VSreducer from './VSreducer';

export default combineReducers({
	UIsettings: UIreducer,
	VScontent: VSreducer
})