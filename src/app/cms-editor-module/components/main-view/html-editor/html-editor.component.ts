import { Component, OnInit } from '@angular/core';
import { CmsServiceService } from 'src/app/cms-editor-module/services/cms-service.service';
import { CustomOption } from "ngx-quill";
import { htmlEditButton } from "quill-html-edit-button";
import Quill from "quill";

Quill.register({"modules/htmlEditButton": htmlEditButton});

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss']
})

export class HtmlEditorComponent implements OnInit {

  modules = {
    htmlEditButton: {},
  };

  constructor(public service: CmsServiceService) { }

  ngOnInit(): void {
  }

  changedEditor(event: any, id: string) {
    console.log("Changed HTML editor event", event);
    switch(id) {
      case 'header-editor':
        if(event.text !== undefined && event.html !== undefined) {
          this.service.setNewHeader(event.text, event.html);
        }
        break;
      case 'main-content-editor':
        if(event.text !== undefined && event.html !== undefined) {
          this.service.setNewMainContent(event.text, event.html);
        }
        break;
      case 'footer-editor':
        if(event.text !== undefined && event.html !== undefined) {
          this.service.setNewFooter(event.text, event.html);
        }
        break;
    }
  }

  createdEditor(event: any, id: string) {
    console.log("Created HTML editor event", event);
    switch(id) {
      case 'header-editor':
        if(this.service.getPage().header !== undefined) {
          event.root.innerHTML = this.service.getPage().headerHTML;
          }
        // event.setText(this.service.getPage().header); ta metoda nie działa ze stringem html, bo pojawiają się tagi itp., ale można to obejść zapisując do obiektu modelu czysty tekst bez tagów
        break;
      case 'main-content-editor':
        if(this.service.getPage().mainContent !== undefined) {
          event.root.innerHTML = this.service.getPage().mainContentHTML;
        }
        // event.setText(this.service.getPage().mainContent);
        break;
      case 'footer-editor':
        if(this.service.getPage().footer !== undefined) {
          event.root.innerHTML = this.service.getPage().footerHTML;
        }
        // event.setText(this.service.getPage().footer);
        break;
    }
  }

  changePageTitle() {
    document.title = this.service.getPage().pageTitle;
  }

}
