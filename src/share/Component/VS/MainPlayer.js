import React from 'react';
import { connect } from 'react-redux';

const mainPlayer = props => (
	< div className="MainPlayer" >
		<iframe src="https://www.youtube.com/embed/pV08htaQbDg?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560" width="560" height="315" allowtransparency="true" frameborder="0">
		</iframe>
	</div >
)

export default connect(mapStateToProps)(mainPlayer)