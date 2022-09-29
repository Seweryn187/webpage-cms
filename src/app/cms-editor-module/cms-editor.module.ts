import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './components/main-view/main-view.component';
import { CssEditorComponent } from './components/main-view/css-editor/css-editor.component';
import { HtmlEditorComponent } from './components/main-view/html-editor/html-editor.component';
import { ViewerComponent } from './components/main-view/viewer/viewer.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuillModule } from 'ngx-quill';
import { CmsServiceService } from './services/cms-service.service';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { htmlEditButton } from "quill-html-edit-button";



@NgModule({
  declarations: [
    MainViewComponent,
    CssEditorComponent,
    HtmlEditorComponent,
    ViewerComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    QuillModule.forRoot({
      modules: {
        htmlEditButton: {},
      }
    }),
    BrowserAnimationsModule,
    MatInputModule, 
    FormsModule
  ],
  exports: [
    MainViewComponent
  ],
  providers: [
    CmsServiceService
  ],
})
export class CmsEditorModule { }
