import React from 'react';
import { shallow } from 'enzyme';

import { toBeTypeOf } from '../util';
import EmbeddedPlayer, { EmbeddedPlayer as ComponentUnderTheTest } from '../../src/share/Containers/VS/EmbeddedPlayer';
import stylesNameList from '../../../assets/styles/styles.scss';

describe('<EmbeddedPlayer', () => {
	let wrapper;

	beforeEach(() => wrapper = shallow(<ComponentUnderTheTest youtubeID='as'/>));

	// здесь собирался проверить что передается в ф-цию в виде аргументов. Но нет знаний пока это проверить, потому что оно требует интеграционного теста с работой анимации
	// it('animationHandler must verify animation name to handle it', () => {
	// 	const wrapperAsFunc = wrapper.instance();
	// 	wrapperAsFunc.animationHandler = jest.fn();
	// 	expect(wrapperAsFunc.animationHandler).toHaveBeenCalled()
	// })
	it('classnames should be applied under different conditions', () => {
		const wrapperAsFunc = wrapper.instance();
		const { EmbeddedPlayer, changing } = stylesNameList;
		wrapperAsFunc.applyClassName();
		//expect default classnames
		expect(wrapperAsFunc.state.className).toMatch(new RegExp(EmbeddedPlayer, 'gm'));
		//expect changed classes
		wrapperAsFunc.applyClassName(true);
		expect(wrapperAsFunc.state.className).toMatch(new RegExp(EmbeddedPlayer + ' ' + changing, 'gm'));
	});

	it('must render iframe only if youtubeid is passed', () => {
		wrapper = shallow(<ComponentUnderTheTest youtubeID='anID'/>);
		expect(wrapper.find('iframe').length).toEqual(1);

		wrapper = shallow(<ComponentUnderTheTest youtubeID={undefined}/>);
		expect(wrapper.find('iframe').length).toEqual(0);
	})
})