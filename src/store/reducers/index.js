import { combineReducers } from 'redux';
import UIreducer from './UIreducer';
import VSreducer from './VSreducer';
import AppServiceReducer from './AppServiceReducer';

export default combineReducers({
	UIsettings: UIreducer,
	VScontent: VSreducer,
	AppServiceState: AppServiceReducer
})