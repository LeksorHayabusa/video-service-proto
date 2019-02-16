//this reducer created to serve ui and staff application data
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
	//keys are differenciated by component-based roles
	modal: {
		isOpened: false,
		isMounted: false,
		content: {
			header:'',
			body: ''
		},
		props: {
			['aria-modal']: true,
		}
	},
	backdrop: {
		isOpened: false
	}
}


export default (state = initialState, { type, content }) => {
	switch (type) {
		case (actionTypes.OPEN_MODAL): {
			const updatedState = { ...state };
			updatedState.modal.isOpened = true;
			updatedState.modal.isMounted = true;
			updatedState.modal.content = content;
			return updateObject(state, updatedState)
		}
		//it removes css classes from modal component 
		// and makes it unvisible. The actions are split 
		// on CLOSE_MODAL and REMOVE_MODAL_CONTENT to run at the first the closing animation and secondly 
		// we empty the modal window to clear the resources.
		case (actionTypes.CLOSE_MODAL): {
			const updatedState = { ...state };
			// updatedState.modal.content = 'after remove';
			updatedState.modal.isOpened = false;
			return updateObject(state, updatedState)
		}
		case (actionTypes.REMOVE_MODAL_CONTENT): {
			const updatedState = { ...state };
			updatedState.modal.content = initialState.modal.content;
			updatedState.modal.isMounted = false;
			return updateObject(state, updatedState)
		}
		case (actionTypes.CLOSE_BACKDROP): {
			const updatedState = { ...state };
			updatedState.backdrop.isOpened = false;
			return updateObject(state, updatedState)
		}
		default: return state
	}
}