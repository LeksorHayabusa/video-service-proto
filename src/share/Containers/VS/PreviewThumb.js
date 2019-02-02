import React from 'react';
import { connect } from 'react-redux';

import Button from '../UI/Button';

const PreviewThumb = ({ previewList, i, cancelBtn, addBtn }) => (
	<div className='PreviewThumb'>
		<h6>{previewList[i].title}</h6>
		<img src={previewList[i].thumbUrl} alt={previewList[i].title} />
		<p>some description about {previewList[i].title}</p>
		<div className="footer">
			<button btntype={cancelBtn}>Cancel</button>
			<button btntype={addBtn}>Add to card</button>
		</div>
	</div>
)

const mapStateToProps = state => ({
	previewList: state.VScontent.previewList,
	cancelBtn: state.UIsettings.cancelBtn,
	addBtn: state.UIsettings.addBtn
});
const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(PreviewThumb)