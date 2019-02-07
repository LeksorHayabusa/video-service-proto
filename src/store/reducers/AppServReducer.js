import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
	modal: {
		isOpened: false,
		content: 'helo oleh',
		props: {
			aria_modal: false,
			aria_hidden: true
		}
	},
	backdrop: {
		isOpened: false
	}
}


export default (state = initialState, { type, content }) => {
	switch (type) {
		case (actionTypes.OPEN_MODAL): {
			const updatedState = {...state};

			updatedState.backdrop.isOpened = true;
			updatedState.modal.isOpened = true;
			updatedState.modal.content = content;
			updatedState.modal.props.aria_hidden = false;
			updatedState.modal.props.aria_modal = true;

			return updateObject(state, updatedState)
		}
		case (actionTypes.CLOSE_MODAL): {
			const updatedState = {...state};

			updatedState.backdrop.isOpened = false;
			updatedState.modal.isOpened = false;
			updatedState.modal.content = undefined;
			updatedState.modal.props.aria_hidden = true;
			updatedState.modal.props.aria_modal = false;
			
			return updateObject(state, updatedState)
		}
		case (actionTypes.CLOSE_BACKDROP): {
			const updatedState = {...state};
			updatedState.backdrop.isOpened = false;
			return updateObject(state, updatedState)
		}
		default: return state
	}
}