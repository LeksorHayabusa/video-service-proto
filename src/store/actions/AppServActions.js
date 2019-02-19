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

//DRAGGABLE PLAYER
export const mountDragPlayer = content => ({type: actionTypes.MOUNT_DRAG_PLAYER, content})

export const dragPlayer = () => ({type: actionTypes.DRAG_PLAYER})

export const closeDragPlayer = () => ({type: actionTypes.CLOSE_DRAG_PLAYER})

export const unmountDragPlayer = () => ({type: actionTypes.UNMOUNT_DRAG_PLAYER})
