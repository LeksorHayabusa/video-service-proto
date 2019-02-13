import { put, delay } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { TRANSITION_DURATION } from '../../assets/styles/_variables.scss';

export function* unmountModal() {
  yield delay(TRANSITION_DURATION)
  yield put({ type: actionTypes.REMOVE_MODAL_CONTENT })
}