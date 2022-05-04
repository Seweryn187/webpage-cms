import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmsEditorComponent } from './cms-editor/cms-editor.component';
import { CmsViewerComponent } from './cms-viewer/cms-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CmsEditorComponent,
    CmsViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
