import * as actionTypes from '../actions/actionTypes';
import actions from '../actions/index';
import { updateObject } from '../utils';

const initialState = {
	nav: {
		header: [
			{
				id: 'id1',
				link1: 'logo',
				style: 'icon',
				name: 'Home',
				disabled: false,
				a_pressed: false
			},
			{
				id: 'id2',
				link2: 'search',
				style: 'search',
				name: 'Search',
				disabled: false,
				a_pressed: false
			},
			{
				id: 'id3',
				link3: 'workout',
				style: 'icon',
				name: 'Workout',
				disabled: false,
				a_pressed: false
			},
			{
				id: 'id4',
				link4: 'workout2',
				style: 'icon',
				name: 'Wk2',
				disabled: false,
				a_pressed: false
			},
			{
				id: 'id5',
				link3: 'workout',
				style: 'icon',
				name: 'wk3',
				disabled: false,
				a_pressed: false
			},
			{
				id: 'id6',
				link4: 'workout2',
				style: 'icon',
				name: '2k4',
				disabled: false,
				a_pressed: false
			}
		]
	},
	modal: {
		props: {
			opened: 'aria-modal',
			closed: 'aria-hidden'
		},
		buttons: {
			xClose: {
				style: 'x-close-btn'
			},
			default: {
				style: 'default'
			}
		}
	},
	dragWrapper: {
		buttons: {
			xClose: {
				style: 'x-close-btn'
			}
		}
	}
	
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case (actionTypes): return updateObject(state);
		default: return state;
	}
}