import { combineReducers } from 'redux';
import UIreducer from './UIreducer';
import VSreducer from './VSreducer';
import AppServReducer from './AppServReducer';

export default combineReducers({
	UIsettings: UIreducer,
	VScontent: VSreducer,
	AppServState: AppServReducer
})