import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [IndexComponent],
	imports: [
		CommonModule,
		FormsModule,
		HomeRoutingModule
	],
	exports: [IndexComponent]
})
export class HomeModule { }
