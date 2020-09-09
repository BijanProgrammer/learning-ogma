import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { OgmaService } from './services/ogma.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule ],
	providers: [ OgmaService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
