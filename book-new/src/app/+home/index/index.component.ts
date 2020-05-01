import { Component, OnInit } from '@angular/core';
import { releases, types } from 'app/core/data';
import { IRelease } from 'app/core/model/IRelease';
import { IType } from 'app/core/model/IType';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	dataModel: any = {
		basePath: 'https://book.linuxfromscratch.ru',
		mail: 'info@linuxfromscratch.ru',
		mirror1: 'https://linuxfromscratch.ru/',
		vk: 'https://vk.com/linuxfromscratch_ru',
		git: 'https://github.com/avmaisak/LFS_Book',
		releases: releases,
		types: types,
	}

	selectedRelease: IRelease;
	selectedType: IType;

	get prefix(): string {
		let res = '';
		this.selectedRelease.path !== '' ? res= '/'  : res = '';
		return res;
	}

	get systemvUrl(): string {
		let resType = '';
		switch (this.selectedType.name) {
			case 'paged':  resType = '/systemv'; break;
			case 'chunked-html':  resType = '/systemv-nc/LFS-BOOK.html'; break;
			case 'txt':  resType = '/systemv-nc/systemv.txt'; break;
		}

		return `${this.dataModel.basePath}${this.prefix}${this.selectedRelease.path}${resType}`;
	}

	get systemdUrl(): String {
		let resType = '';
		switch (this.selectedType.name) {
			case 'paged':  resType = '/systemd'; break;
			case 'chunked-html':  resType = '/systemd-nc/LFS-SYSD-BOOK.html'; break;
			case 'txt':  resType = '/systemd-nc/systemd.txt'; break;
		}

		return `${this.dataModel.basePath}${this.prefix}${this.selectedRelease.path}${resType}`;
	}

	constructor() { }

	ngOnInit() {
		this.selectedRelease = this.dataModel.releases[0];
		this.selectedType = this.dataModel.types[0];
	}

}
