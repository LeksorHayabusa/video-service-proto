import * as actionTypes from './actionTypes';

export const openModal = (content) => ({
	type: actionTypes.OPEN_MODAL,
	content
})

export const closeModal = () => ({ type: actionTypes.CLOSE_MODAL })

export const closeBackdrop = (parent) => {
	console.log(parent);
	if (parent === actionTypes.MODAL_PARENT) {
		return closeModal();
	}
	return {type: actionTypes.CLOSE_BACKDROP}
}