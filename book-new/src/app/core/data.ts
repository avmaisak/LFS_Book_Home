import { IRelease } from "./model/IRelease";
import { IType } from "./model/IType";

export const releases: IRelease[] = [
	{
		name: 'dev',
		path: ''
	},
	{
		name: '9.0',
		path: '9.0'
	},
	{
		name: '8.4',
		path: '8.4'
	},
	{
		name: '8.3',
		path: '8.3'
	},
];

export const types: IType[] = [
	{
		name: 'html',
	},
	{
		name: 'pdf'
	},
];
