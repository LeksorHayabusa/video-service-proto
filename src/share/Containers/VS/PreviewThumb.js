import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Button from '../../Containers/UI/Button';
import * as actionCreator from '../../../store/actions/index'
import EmbeddedPlayer from "./EmbeddedPlayer";

const PreviewThumb = ({
	previewList,
	i,
	cancelBtn,
	addBtn,
	openDragWrapperAction }) => {
	return (
		<div className='PreviewThumb'>
			<h6 className='title'>{previewList[i].title}</h6>
			<img
				src={`https://img.youtube.com/vi/${previewList[i].youtubeID}/0.jpg`}
				alt={previewList[i].title}
				onClick={() => {
					openDragWrapperAction({
						title: previewList[i].title,
						element: EmbeddedPlayer,
						props: {
							youtubeID: previewList[i].youtubeID
						}
						// body: <EmbeddedPlayer youtubeID={previewList[i].youtubeID} />
					})
				}}
			/>
			<div className="footer">
				<Button btntype={cancelBtn}>Not interesting</Button>
				<Button btntype={addBtn}>Add to card</Button>
			</div>
		</div>
	)
}

// const PropTypes = {
// 	PreviewThumb
// }

const mapStateToProps = state => ({
	previewList: state.VScontent.previewList,
	cancelBtn: state.UIsettings.cancelBtn,
	addBtn: state.UIsettings.addBtn
});
const mapDispatchToProps = dispatch => ({
	openDragWrapperAction: (content) => dispatch(actionCreator.mountDragWrapper(content))
})
export default connect(mapStateToProps, mapDispatchToProps)(PreviewThumb)