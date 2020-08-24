import { IRelease } from "./model/IRelease";
import { IType } from "./model/IType";

export const releases: IRelease[] = [
	{
		name: 'dev',
		path: ''
	},
	{
		name: '8.3',
		path: '8.3'
	},
	{
		name: '8.4',
		path: '8.4'
	},
];

export const types: IType[] = [
	{
		name: 'paged'
	},
	{
		name: 'chunked-html'
	},
	{
		name: 'txt'
	},
	{
		name: 'pdf'
	},
];
