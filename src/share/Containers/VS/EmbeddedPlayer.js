import React, { Component } from 'react';
import { connect } from 'react-redux';

import animationTypes from '../../../assets/styles/styles.scss';

class EmbeddingPlayer extends Component {
	state = {
		// isChanging: true
		className: ''
	}

	// previewChangeAction = (isChanging) => {
	// 	console.log('ischanging bool getting changed')
	// 	this.setState({ isChanging });
	// }

	applyClassName = (isChanging) => {
		console.log('hi every time from changing func')
		const classArray = ['EmbeddingPlayer'];
		let className;
		if (isChanging) {
			classArray.push('changing');
			className = classArray.join(" ");
		}
		if (!isChanging){ className = classArray.join(" ") };
		console.log('classname is applied', className);
		return this.setState({className})
	}

	componentDidUpdate = (prevProps) => {
		console.log('compoent did update with', prevProps.youtubeID);
	}

	componentWillReceiveProps = (nextProps) => {
		const nextItem = nextProps.youtubeID;
		const prevItem = this.props.youtubeID;
		if (nextItem !== prevItem) {
			// this.previewChangeAction(true);
			console.log('it gets props twice')
			this.applyClassName(true)
		}
	}

	render() {
		const { youtubeID } = this.props;
		// let className = this.applyClassName(this.state.isChanging);
		return (
			<div className={this.state.className}
				onAnimationEnd={
					({ animationName }) => {
						console.log(animationName, 'animationName and waited name', animationTypes.flashIn, 'hello from animation end');
						if(animationName === animationTypes.flashInEffect) {
							this.applyClassName(false)
					}}}
			>
				{youtubeID ? (<iframe src={`https://www.youtube.com/embed/${youtubeID}?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`} width="560" height="315" allowtransparency="true" frameBorder="0" />) : 'no content available'}
			</div>
		)
	}
}

const mapStateToProps = state => ({ previewList: state.VScontent.previewList });

export default connect(mapStateToProps, null)(EmbeddingPlayer)