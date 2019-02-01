import * as actionTypes from '../actions/actionTypes';
import { } from '../actions/index';

const initialState = {
	inPlay: {},
	previewList: [
		{
			id: '',
			name: '',
			url: '',
			thumb: '',
		}
	]
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		default: return state
	}
}