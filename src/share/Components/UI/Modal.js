import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';

import Button from '../../Containers/UI/Button';
import * as actionCreator from '../../../store/actions/index';


class Modal extends Component {
	render() {
		const {
			content,
			headerCloseButton,
			isOpened,
			isMounted,
			attributeProps,
			closeModalAction,
			removeModalContentAction
		} = this.props;
		return (
			<Fragment>
				{isMounted && <div className={`Modal ${isOpened ? 'active' : null}`} {...attributeProps}>
					<Fragment>
						{content && (
							<div className='modal-body' onAnimationEnd={
								({animationName}) => {
								animationName === 'closeModal' &&
								removeModalContentAction()
							}}>
								<div className="modal-header">
									<h4>hellow from modal</h4>
									<Button
										styles={headerCloseButton.styles}
										clickButtonAction={closeModalAction}
									>x</Button>
								</div>
								<div className="modal-content">{content.body}</div>
								<div className="modal-footer">
									<Button>Okey but</Button>
								</div>
							</div>
						)}
						<div className="modal-backdrop" onClick={closeModalAction} />
					</Fragment>
				</div>
				}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	isOpened: state.AppServState.modal.isOpened,
	isMounted: state.AppServState.modal.isMounted,
	content: state.AppServState.modal.content,
	attributeProps: state.AppServState.modal.props,
	headerCloseButton: state.UIsettings.modal.buttons.closeModal
});
const mapDispatchToProps = dispatch => ({
	closeModalAction: () => dispatch(actionCreator.closeModal()),
	removeModalContentAction: () => dispatch(actionCreator.removeModalContent())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)