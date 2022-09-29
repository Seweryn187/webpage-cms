import { Component, OnDestroy, OnInit } from '@angular/core';
import { CmsServiceService } from 'src/app/cms-editor-module/services/cms-service.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {

  style = document.createElement('style');

  constructor(public service: CmsServiceService) {
  }

  ngOnInit(): void {
    document.documentElement.style
    .setProperty('--css', this.service.getPage().css);


    this.style.innerHTML = this.service.getPage().css;

    document.body.appendChild(this.style);

    document.getElementById('header')!.innerHTML = this.service.getPage().headerHTML;
    document.getElementById('main')!.innerHTML = this.service.getPage().mainContentHTML;
    document.getElementById('footer')!.innerHTML = this.service.getPage().footerHTML;
  }


  ngOnDestroy(): void {
    document.body.removeChild(this.style);
  }

}
