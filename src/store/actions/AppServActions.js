import * as actionTypes from './actionTypes';

//MODAL ACTIONS
export const mountAndOpenModal = (content) => ({ type: actionTypes.MOUNT_AND_OPEN_MODAL, content })

export const closeModal = () => ({ type: actionTypes.CLOSE_MODAL });

export const unmountModal = () => ({ type: actionTypes.UNMOUNT_MODAL });

//BACKDROP
export const closeBackdrop = (parent) => {
	console.log(parent);
	if (parent === actionTypes.MODAL_PARENT) {
		return //closeModal; - to be reconnected to saga actions
	}
	return { type: actionTypes.CLOSE_BACKDROP }
}

//DRAGGABLE WRAPPER
export const mountDragWrapper = content => ({type: actionTypes.MOUNT_DRAG_WRAPPER, content})

export const closeDragWrapper = () => ({type: actionTypes.CLOSE_DRAG_WRAPPER})

export const unmountDragWrapper = () => ({type: actionTypes.UNMOUNT_DRAG_WRAPPER})
