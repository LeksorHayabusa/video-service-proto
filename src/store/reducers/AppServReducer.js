import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
	modal: {
		isOpened: false,
		content: 'helo oleh',
		props: {
			['aria-modal']: false,
			['aria-hidden']: true,
			['data-shown']: false
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
			updatedState.modal.props['data-shown'] = true;

			return updateObject(state, updatedState)
		}
		case(actionTypes.MOUNT_MODAL_CONTENT): {
			const updatedState = {...state};
			return updateObject(state, updatedState)

		}
		//it removes css classes from modal component 
		// and makes it unvisible. The actions are split 
		// on CLOSE_MODAL and REMOVE_MODAL_CONTENT to run at the first the closing animation and secondly 
		// we empty the modal window to clear the resources.
		case (actionTypes.CLOSE_MODAL): {
			const updatedState = {...state};
			// updatedState.backdrop.isOpened = false;
			updatedState.modal.isOpened = false;
			updatedState.modal.props['aria-hidden'] = true;
			updatedState.modal.props['aria-modal'] = false;
			updatedState.modal.props['data-shown'] = false;
			
			return updateObject(state, updatedState)
		}
		case (actionTypes.REMOVE_MODAL_CONTENT): {
			const updatedState = {...state};
			updatedState.modal.content = 'after remove';
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