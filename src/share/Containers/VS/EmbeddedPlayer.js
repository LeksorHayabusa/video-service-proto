import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import stylesNameList from '../../../assets/styles/styles.scss';
// import { keyframeNameCheck } from '../../../tests/CustomErrors/errors';

export class EmbeddedPlayer extends Component {
	static propTypes = {
		previewList: PropTypes.array.isRequired,
		youtubeID: PropTypes.string.isRequired
	}

	state = {
		className: ''
	}

	applyClassName = (isChanging) => {
		const  { EmbeddedPlayer, changing } = stylesNameList;
		const classArray = [EmbeddedPlayer];
		let className;
		if (isChanging) { 
			classArray.push(changing);
			className = classArray.join(" ");
		}
		if (!isChanging) { className = classArray.join(" ") };
		return this.setState({ className })
	}

	animationHandler = ({ animationName }, expectedKeyframeName) => {
		if (animationName === expectedKeyframeName) {
			return this.applyClassName(false)
		}
		// keyframeNameCheck(expectedKeyframeName)
	}

	componentDidMount = () => this.applyClassName(true);

	componentWillReceiveProps = (nextProps) => {
		const nextItem = nextProps.youtubeID;
		const prevItem = this.props.youtubeID;
		if (nextItem !== prevItem) {
			this.applyClassName(true)
		}
	}

	render() {
		const { youtubeID } = this.props;
		return (
			<div className={this.state.className}
				onAnimationEnd={(e) => 
					this.animationHandler(e,stylesNameList.flashIn)}
			>
				{youtubeID ? (<iframe src={`https://www.youtube.com/embed/${youtubeID}?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`} width="560" height="315" allowtransparency="true" frameBorder="0" />) : 'no content available'}
				<div className="bla">хело</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({ previewList: state.VScontent.previewList });

export default connect(mapStateToProps, null)(EmbeddedPlayer)