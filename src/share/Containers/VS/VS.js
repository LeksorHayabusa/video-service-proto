import React from 'react'; 
import { Route, Switch, withRouter} from 'react-router-dom';

import PreviewList from './PreviewList';

const VS = (props) => {
	return (
		<div className='VS'>
			<Switch>
				<Route exact path='/'
				component={PreviewList}
				/>
				{/* <Route exact path='/watch?='
				component={<WatchList/>} */}
				/>
			</Switch>
		</div>
	)
}

export default withRouter(VS)