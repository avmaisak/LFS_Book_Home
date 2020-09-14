import { Component, OnInit } from '@angular/core';
import { releases, types } from 'app/core/data';
import { IRelease } from 'app/core/model/IRelease';
import { IType } from 'app/core/model/IType';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {

	dataModel: any = {
		basePath: 'https://book.linuxfromscratch.ru',
		mirror1: 'https://linuxfromscratch.ru/',
		git: 'https://github.com/avmaisak/LFS_Book',
		releases: releases,
		types: types,
		telegramm: 'https://t.me/LinuxFromScratch_RUS',
		pdfName: 'LFS-BOOK.pdf',
		pdfSystemDName: 'LFS-SYSD-BOOK.pdf',
	}

	selectedRelease: IRelease;
	selectedType: IType;

	get prefix(): string {
		let res = '';
		this.selectedRelease.path !== '' ? res = '/' : res = '';
		return res;
	}

	get systemvUrl(): string {
		let resType = '';
		switch (this.selectedType.name) {
			case 'html': resType = '/systemv'; break;
			case 'pdf': resType = `/systemv/${this.dataModel.pdfName}`; break;
		}

		return `${this.dataModel.basePath}${this.prefix}${this.selectedRelease.path}${resType}`;
	}

	get systemdUrl(): String {
		let resType = '';
		switch (this.selectedType.name) {
			case 'html': resType = '/systemd'; break;
			case 'pdf': resType = `/systemd/${this.dataModel.pdfSystemDName}`; break;
		}

		return `${this.dataModel.basePath}${this.prefix}${this.selectedRelease.path}${resType}`;
	}

	ngOnInit() {
		this.selectedRelease = this.dataModel.releases[0];
		this.selectedType = this.dataModel.types[0];
	}

}
