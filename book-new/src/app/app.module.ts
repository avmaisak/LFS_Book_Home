import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { allIcons } from 'ngx-bootstrap-icons';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxBootstrapIconsModule.pick(allIcons)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
