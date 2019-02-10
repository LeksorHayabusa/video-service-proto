import * as actionTypes from './actionTypes';

export const openModal = (content) => ({ type: actionTypes.OPEN_MODAL, content })

export const mountModalContent = (content) => ({type: actionTypes.MOUNT_MODAL_CONTENT, content})

export const closeModal = () => ({ type: actionTypes.CLOSE_MODAL });

export const removeModalContent = () => ({ type: actionTypes.REMOVE_MODAL_CONTENT });

export const closeBackdrop = (parent) => {
	console.log(parent);
	if (parent === actionTypes.MODAL_PARENT) {
		return closeModal();
	}
	return { type: actionTypes.CLOSE_BACKDROP }
}