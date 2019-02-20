import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../Containers/UI/Button';
import { closeDragPlayer } from '../../../store/actions/index'

class DraggablePlayer extends Component {
	state = {
		relX: 0,
		relY: 0,
		x: 0,
		y: 0,
		//какие-то коэффициенты
		gridX: 1,
		gridY: 1
	}

	onMove = e => {
		const { relX, relY, x, y, gridX, gridY } = this.state;
		const { } = this.props;
		console.log(relX, relY, x, y);
		const xUpdated = Math.trunc((e.pageX - relX) / gridX) * gridX;
		const yUpdated = Math.trunc((e.pageY - relY) / gridY) * gridY;
		if (xUpdated !== x || yUpdated !== y) {
			this.setState({ x: xUpdated, y: yUpdated })
			// this.props.onUpdatePosition(xUpdated, yUpdated)
		}

	}

	onStart = e => {
		const ref = ReactDOM.findDOMNode(this._draggableAnchorDiv);
		const body = document.body;
		const box = ref.getBoundingClientRect();
		this.setState({
			relX: e.pageX - (box.left + body.scrollLeft - body.clientLeft),
			relY: e.pageY - (box.top + body.scrollTop - body.clientTop)
		})
	}

	onMouseDown = e => {
		if (e.button !== 0) return;
		this.onStart(e);
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
		e.preventDefault();
	}

	onMouseMove = e => {
		this.onMove(e);
		e.preventDefault();
	}

	onMouseUp = e => {
		if (e.button !== 0) return;
		document.removeEventListener('mouseup', this.onMouseUp);
		document.removeEventListener('mousemove', this.onMouseMove);
		// this.onStop(this.state.x, this.state.y)
		e.preventDefault()
	}

	onTouchStart = e => {
		this.onStart(e.touches[0]);
		document.addEventListener('touchmove', this.onTouchMove, { passive: false });
		document.addEventListener('touchend', this.onTouchEnd, { passive: false });
		e.preventDefault();
	}

	onTouchMove = e => {
		this.onMove(e.touches[0])
		e.preventDefault();
	}

	onTouchEnd = e => {
		document.removeEventListener('touchmove', this.onTouchMove);
		document.removeEventListener('touchend', this.onTouchEnd);
		// this.onStop
	}

	getRefToDrag = div => this._draggableAnchorDiv = div;

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
					style={{
						left: this.state.x,
						top: this.state.y
					}}
				>
					<header className="dragPlayer-header">
						<div
							className="draggableAnchorDiv"
							onMouseDown={this.onMouseDown}
							onTouchStart={this.onTouchStart}
							ref={this.getRefToDrag}
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
	closePlayerAction: () => dispatch(closeDragPlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(DraggablePlayer)