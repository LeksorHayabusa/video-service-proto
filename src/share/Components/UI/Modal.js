import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';

import Button from '../../Containers/UI/Button';
import * as actionCreator from '../../../store/actions/index';

class Modal extends Component {

	render() {
		const {
			content,
			headerCloseButton,
			isOpened,
			attributeProps,
			openModalAction,
			mountModalContentAction,
			closeModalAction,
			removeModalContentAction
		} = this.props;
		return (
			<Fragment>
				<div className="Modal" {...attributeProps}	>
					{content && (
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
					)}
					<div className="modal-backdrop" onClick={closeModalAction} />
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	isOpened: state.AppServState.modal.isOpened,
	content: state.AppServState.modal.content,
	attributeProps: state.AppServState.modal.props,
	headerCloseButton: state.UIsettings.modal.buttons.closeModal
});
const mapDispatchToProps = dispatch => ({
	removeModalContentAction: () => dispatch(actionCreator.removeModalContent()),
	closeModalAction: () => dispatch(actionCreator.closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)