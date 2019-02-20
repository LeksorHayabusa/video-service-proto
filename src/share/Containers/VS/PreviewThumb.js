import React from 'react';
import { connect } from 'react-redux';

import Button from '../../Containers/UI/Button';
import * as actionCreator from '../../../store/actions/index'

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
				src={previewList[i].thumbUrl}
				alt={previewList[i].title}
				onClick={() => { openDragWrapperAction(previewList[i]) }}
			/>
			<div className="footer">
				<Button btntype={cancelBtn}>Not interesting</Button>
				<Button btntype={addBtn}>Add to card</Button>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	previewList: state.VScontent.previewList,
	cancelBtn: state.UIsettings.cancelBtn,
	addBtn: state.UIsettings.addBtn
});
const mapDispatchToProps = dispatch => ({
	openDragWrapperAction: (content) => dispatch(actionCreator.mountDragWrapper(content))
})
export default connect(mapStateToProps, mapDispatchToProps)(PreviewThumb)