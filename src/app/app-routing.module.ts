import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssEditorComponent } from './cms-editor-module/components/main-view/css-editor/css-editor.component';
import { HtmlEditorComponent } from './cms-editor-module/components/main-view/html-editor/html-editor.component';
import { ViewerComponent } from './cms-editor-module/components/main-view/viewer/viewer.component';

const routes: Routes = [
  {path: 'viewer', component: ViewerComponent},
  {path: 'html-editor', component: HtmlEditorComponent},
  {path: 'css-editor', component: CssEditorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
