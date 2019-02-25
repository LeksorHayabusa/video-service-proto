import React from 'react';
import { connect } from 'react-redux';

export const EmbeddingPlayer = ({ previewList, youtubeID }) => (
	<div className='EmbeddingPlayer'>
			{youtubeID ? (<iframe src={`"https://www.youtube.com/embed/${previewList[youtubeID]}?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"`} width="560" height="315" allowTransparency="true" frameBorder="0">
			</iframe>) : 'no content available'}
	</div>
)

const mapStateToProps = state => ({ previewList: state.VScontent.previewList });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EmbeddingPlayer)