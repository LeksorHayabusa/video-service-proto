import React from 'react';
import { shallow } from 'enzyme';

import { toBeTypeOf } from '../util';
import EmbeddedPlayer, { EmbeddedPlayer as ComponentUnderTheTest} from '../../src/share/Containers/VS/EmbeddedPlayer';
import animationTypes from '../../../assets/styles/styles.scss';

describe('<EmbeddedPlayer', () => {
	let wrapper;

	beforeEach(() => wrapper = shallow(<ComponentUnderTheTest youtubeID='as'/>));
	
	it('must receive animation name from event object', () => {
		const wrapperAsClass = wrapper.instance();
		const animationHandler = jest.fn();
		expect(animationHandler).toBeCalledWith({animationName: animationTypes.flashIn}, animationTypes.flashIn);
	})
})