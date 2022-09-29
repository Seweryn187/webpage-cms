import { Component, OnInit } from '@angular/core';
import { CmsServiceService } from 'src/app/cms-editor-module/services/cms-service.service';

@Component({
  selector: 'app-css-editor',
  templateUrl: './css-editor.component.html',
  styleUrls: ['./css-editor.component.scss']
})
export class CssEditorComponent implements OnInit {



  constructor(private service: CmsServiceService) { }

  ngOnInit(): void {
  }

  changedEditor(event: any) {
    console.log("Changed CSS editor event", event);
    if(event.text !== undefined && event.text !== this.service.getPage().css ) {
      let newCss: string = event.text;
      newCss = newCss.trim();
      console.log("test", newCss.charAt(newCss.length-1));
      this.service.setNewCss(newCss);
    }
  }

  createdEditor(event: any) {
    console.log("Created CSS editor event", event);
    if(this.service.getPage().css !== undefined) {
      event.root.innerHTML = this.service.getPage().css;
      
    }
  }


}
