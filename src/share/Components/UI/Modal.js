import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as reservedName from '../../../store/actions/actionTypes';
import Backdrop from '../../Containers/UI/Backdrop';
import Button from '../../Containers/UI/Button';
import * as actionCreator from '../../../store/actions/index';

class Modal extends Component {

	render() {
		const {
			isOpened,
			content,
			headerCloseButton,
			closeBtnAria_hidden = true,
			closeBtnAria_modal = false,
			//the action below
			closeModalAction,
		} = this.props;
		return (
			<Fragment>
				<div className="Modal" aria-hidden={closeBtnAria_hidden} aria-modal={closeBtnAria_modal}>
					{isOpened && (
						<Fragment>
							<div className='modal-body'>
								<div className="modal-header">
									<h4>{content.header}</h4>
									<Button
										styles={headerCloseButton.styles}
										closeModalAction={closeModalAction}
									>x</Button>
								</div>
								<div className="modal-content">{content.body}</div>
								<div className="modal-footer">
									<Button>Okey but</Button>
								</div>
							</div>
							<Backdrop parent={reservedName.MODAL_PARENT} />
						</Fragment>
					)}
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	isOpened: state.AppServState.modal.isOpened,
	content: state.AppServState.modal.content,
	headerCloseButton: state.UIsettings.modal.buttons.closeModal,
	closeBtnAria_hidden: state.AppServState.modal.props.aria_hidden,
	closeBtnAria_modal: state.AppServState.modal.props.aria_modal

});
const mapDispatchToProps = dispatch => ({ closeModalAction: () => dispatch(actionCreator.closeModal()) });

export default connect(mapStateToProps, mapDispatchToProps)(Modal)