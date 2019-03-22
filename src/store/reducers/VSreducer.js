//this reducer created for storing fetched data
//needed for the whole vs app
import * as actionTypes from '../actions/actionTypes';
import { } from '../actions/index';

export const initialState = {
	inPlay: {
		id: '',
		name: '',
		url: '',
		thumb: ''
	},
	previewList: [
		{
			id: 'a1',
			title: 'bring me the horizont some text',
			youtubeID: 'Ow_qI_F2ZJI'
		} ,
		{
			id: 'a2',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a3',
			title: 'bring me the horizont',
			youtubeID: 'Ow_qI_F2ZJI'
		},
		{
			id: 'a4',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a5',
			title: 'bring me the horizont',
			youtubeID: 'Ow_qI_F2ZJI'
		},
		{
			id: 'a6',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a7',
			title: 'bring me the horizont',
			youtubeID: 'Ow_qI_F2ZJI'
		},
		{
			id: 'a8',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a9',
			title: 'bring me the horizont',
			youtubeID: 'Ow_qI_F2ZJI'
		},
		{
			id: 'a10',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
		{
			id: 'a11',
			title: 'bring me the horizont',
			youtubeID: 'Ow_qI_F2ZJI'
		},
		{
			id: 'a12',
			title: 'flaimes',
			youtubeID: 'Nh10gL_GP_w'
		},
	]
}

export default ( state = initialState, { type, payload } ) => {
	switch (type) {
		default: return state;
	}
}