import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { ProPdfViewerComponent } from './pro-pdf-viewer.component';

const _declarations = [ProPdfViewerComponent, LayoutComponent];

@NgModule({
  declarations: _declarations,
  exports: _declarations,
  providers: []
})
export class ProPdfViewerModule {}
