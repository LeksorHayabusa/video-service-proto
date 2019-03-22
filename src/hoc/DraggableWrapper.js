import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../share/Containers/UI/Button';
import { closeDragWrapper } from '../store/actions/index';

class DraggableWrapper extends Component {
	state = {
		relX: 0,
		relY: 0,
		x: 0,
		y: 0
	}

	onMove = e => {
		const { relX, relY, x, y } = this.state;
		const xUpdated = Math.trunc(e.pageX - relX);
		const yUpdated = Math.trunc(e.pageY - relY);
		if (xUpdated !== x || yUpdated !== y) {
			if (yUpdated > 0) this.setState({ x: xUpdated, y: yUpdated });
			if (yUpdated <= 0) this.setState({ x: xUpdated, y: 0 });
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
			isOpened,
			buttonStyles,
			content,
			children,
			closeWrapperAction,
		} = this.props;
		return (
			<div
				className={`DragWrapper ${isOpened && 'active'}`}
				style={{
					left: this.state.x,
					top: this.state.y
				}}
			>
				<header className="dragWrapper-header">
					<div
						className="draggableAnchorDiv"
						onMouseDown={this.onMouseDown}
						onTouchStart={this.onTouchStart}
						ref={this.getRefToDrag}
					>{this.props.title}</div>
					<Button
						styles={buttonStyles.xClose.style}
						clickButtonAction={closeWrapperAction}
					/>
				</header>
				<div className="dragWrapper-content">{children}</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	previewList: state.VScontent.previewList,
	isOpened: state.AppServiceState.dragWrapper.isOpened,
	content: state.AppServiceState.dragWrapper.content,
	buttonStyles: state.UIsettings.dragWrapper.buttons
});
const mapDispatchToProps = dispatch => ({
	closeWrapperAction: () => dispatch(closeDragWrapper())
});

export default connect(mapStateToProps, mapDispatchToProps)(DraggableWrapper)