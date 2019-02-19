import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions/actionTypes';
import Button from '../../Containers/UI/Button';

class DraggablePlayer extends Component {
	dragMouseDown = (e = e || window.event) => {
		e.preventDefault();
		const pos1x = e.clientX;
		const pos1y = e.clientY;
		console.log(pos1x, pos1y);
	}

	render() {
		const {
			isMounted,
			isOpened,
			isDragging,
			buttonStyles,
			closePlayerAction,
		} = this.props;
		return (
			<Fragment>
				{isMounted && <div
					className={`DragPlayer ${isOpened && 'active'}`}
				>
					<header className="dragPlayer-header">
						<div
							className="draggableArea"
							onMouseMove={(e) => this.dragMouseDown(e)}
						/>
						<Button
							styles={buttonStyles.xClose.style}
							clickButtonAction={closePlayerAction}
						/>
					</header>
				</div>
				}
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	previewList: state.VScontent.previewList,
	isMounted: state.AppServiceState.dragPlayer.isMounted,
	isOpened: state.AppServiceState.dragPlayer.isOpened,
	isDragging: state.AppServiceState.dragPlayer.isDragging,
	buttonStyles: state.UIsettings.dragPlayer.buttons
});
const mapDispatchToProps = dispatch => ({
	closePlayerAction: () => dispatch(actionTypes.CLOSE_DRAG_PLAYER)
});

export default connect(mapStateToProps, mapDispatchToProps)(DraggablePlayer)