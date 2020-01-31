import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProPdfViewerModule } from 'lib/pro-pdf-viewer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProPdfViewerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
