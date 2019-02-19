import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../Containers/UI/Button';
import * as actionCreator from '../../../store/actions/index';
import styleNames from '../../../assets/styles/styles.scss';

class Modal extends Component {
	render() {
		const {
			content,
			buttonStyles,
			isOpened,
			isMounted,
			attributeProps,
			closeModalAction,
			unmountModalAction
		} = this.props;
		console.log(content, 'hello from modal content');
		return (
			<Fragment>
				{isMounted && <div className={`Modal ${isOpened ? 'active' : ''}`} {...attributeProps}>
					<Fragment>
						{content && (
							<div className='modal-body' onAnimationEnd={
								({animationName}) => {
								animationName === styleNames.closeModalKeyframes &&
								unmountModalAction()
							}}>
								<div className="modal-header">
									<h4>hellow from modal</h4>
									<Button
										styles={buttonStyles.xClose.style}
										clickButtonAction={closeModalAction}
									/>
								</div>
								<div className="modal-content">{content.body}</div>
								<div className="modal-footer">
									<Button
										styles={buttonStyles.default.style}
										>Okey but</Button>
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
	isOpened: state.AppServiceState.modal.isOpened,
	isMounted: state.AppServiceState.modal.isMounted,
	content: state.AppServiceState.modal.content,
	attributeProps: state.AppServiceState.modal.props,
	buttonStyles: state.UIsettings.modal.buttons
});
const mapDispatchToProps = dispatch => ({
	closeModalAction: () => dispatch(actionCreator.closeModal()),
	unmountModalAction: () => dispatch(actionCreator.unmountModal())
});

Modal.propTypes = {
	isMounted: PropTypes.bool.isRequired,
	isOpened: PropTypes.bool.isRequired,
	attributeProps: PropTypes.object.isRequired,
	content: PropTypes.shape({
		header: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	}).isRequired,
	closeModalAction: PropTypes.func.isRequired,
	unmountModalAction: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)