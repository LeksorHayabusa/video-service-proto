//this reducer created to serve ui and staff application data
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

///////////////внимание нужно рефакторнуть и объединить 
//функции демонтирования модального, драгплеера и затемнения
export const initialState = {
	//keys are splited by component-based roles
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
	},
	dragWrapper: {
		isMounted: false,
		isOpened: false,
		// content: {
		// 	title: '',
		// 	body: {}
		// },
	}
}


export default (state = initialState, { type, content }) => {
	switch (type) {

//MODAL CASES
		case (actionTypes.MOUNT_AND_OPEN_MODAL): {
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
			updatedState.modal.isOpened = false;
			return updateObject(state, updatedState)
		}
		case (actionTypes.UNMOUNT_MODAL): {
			const updatedState = { ...state };
			updatedState.modal.content = initialState.modal.content;
			updatedState.modal.isMounted = false;
			return updateObject(state, updatedState)
		}

//BACKDROP
		case (actionTypes.CLOSE_BACKDROP): {
			const updatedState = { ...state };
			updatedState.backdrop.isOpened = false;
			return updateObject(state, updatedState)
		}

//DRAGGABLE WRAPPER
		case (actionTypes.MOUNT_DRAG_WRAPPER): {
			const updatedState = { ...state };
			updatedState.dragWrapper.isMounted = true;
			updatedState.dragWrapper.isOpened = true;
			// updatedState.dragWrapper.content = content;
			return updateObject(state, updatedState)
		}
		case (actionTypes.CLOSE_DRAG_WRAPPER): {
			const updatedState = { ...state };
			updatedState.dragWrapper.isOpened = false;
			updatedState.dragWrapper.isMounted = false;
			// updatedState.dragWrapper.content = initialState.dragWrapper.content;
			return updateObject(state, updatedState)
		}
		case (actionTypes.UNMOUNT_DRAG_WRAPPER): {
			const updatedState = { ...state };
			updatedState.dragWrapper.isMounted = false;
			// updatedState.dragWrapper.content = initialState.dragWrapper.content;
			return updateObject(state, updatedState)
		}
		default: return state
	}
}