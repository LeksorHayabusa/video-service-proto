//this reducer created to serve ui and staff application data
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

///////////////внимание нужно рефакторнуть и объединить 
//функции демонтирования модального, драгплеера и затемнения
const initialState = {
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
	dragPlayer: {
		isMounted: false,
		isOpened: false,
		isDragging: false,
		content: {}
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
			// updatedState.modal.content = 'after remove';
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

//DRAGGABLE PLAYER
		case (actionTypes.MOUNT_DRAG_PLAYER): {
			const updatedState = { ...state };
			updatedState.dragPlayer.isMounted = true;
			updatedState.dragPlayer.isOpened = true;
			updatedState.dragPlayer.content = content;
			return updateObject(state, updatedState)
		}
		case (actionTypes.DRAG_PLAYER): {
			const updatedState = { ...state };
			updatedState.dragPlayer.isDragging = true;
			return updateObject(state, updatedState)
		}
		case (actionTypes.CLOSE_DRAG_PLAYER): {
			const updatedState = { ...state };
			updatedState.dragPlayer.isOpened = false;
			updatedState.dragPlayer.isMounted = false;
			updatedState.dragPlayer.content = initialState.dragPlayer.content;
			return updateObject(state, updatedState)
		}
		case (actionTypes.UNMOUNT_DRAG_PLAYER): {
			const updatedState = { ...state };
			updatedState.dragPlayer.isMounted = false;
			updatedState.modal.content = initialState.dragPlayer.content;
			return updateObject(state, updatedState)
		}
		default: return state
	}
}