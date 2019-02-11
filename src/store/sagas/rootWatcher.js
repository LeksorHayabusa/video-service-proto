import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { unmountModal } from './UIsaga';

//this watchUI just waiting for the changes in saga action creator
export function* watchUI(){
	yield takeEvery(actionTypes.CLOSE_MODAL, unmountModal);
}