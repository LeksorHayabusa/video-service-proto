//this reducer created to serve ui and staff application data
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
	//keys are differenciated by component-based roles
	modal: {
		isOpened: false,
		content: 'helo oleh',
		props: {
			['aria-modal']: false,
			['aria-hidden']: true,
//data-modal-active 
			['data-modal-active']: false
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
			// updatedState.backdrop.isOpened = true;
			updatedState.modal.isOpened = true;
			updatedState.modal.content = content;
			updatedState.modal.props['aria-hidden'] = false;
			updatedState.modal.props['aria-modal'] = true;
			updatedState.modal.props['data-modal-active'] = true;

			return updateObject(state, updatedState)
		}
		//it removes css classes from modal component 
		// and makes it unvisible. The actions are split 
		// on CLOSE_MODAL and REMOVE_MODAL_CONTENT to run at the first the closing animation and secondly 
		// we empty the modal window to clear the resources.
		case (actionTypes.CLOSE_MODAL): {
			const updatedState = {...state};
			// updatedState.backdrop.isOpened = false;
			updatedState.modal.props['aria-hidden'] = true;
			updatedState.modal.props['aria-modal'] = false;
			updatedState.modal.props['data-modal-active'] = false;
			
			return updateObject(state, updatedState)
		}
		case (actionTypes.REMOVE_MODAL_CONTENT): {
			const updatedState = {...state};
			updatedState.modal.content = 'after remove';
			updatedState.modal.isOpened = false;
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