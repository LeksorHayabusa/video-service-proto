import { put, delay } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

export function* unmountModal() {
  yield delay(5000)
  yield put({ type: actionTypes.REMOVE_MODAL_CONTENT })
}