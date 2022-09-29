import { Injectable } from '@angular/core';
import { PageContent } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class CmsServiceService {

  page: PageContent;


  constructor() { 
    this.page = {
      pageTitle: '',
      header: 'This is a header',
      mainContent: 'This is main content<',
      footer: 'This is a footer',
      headerHTML: '<p>This is a header</p>',
      mainContentHTML: '<p>This is main content</p>',
      footerHTML: '<p>This is a footer</p>',
      css: 'p { font-weight: bold}'
    };
  }


  getPage(): PageContent {
    return this.page;
  }

  setPage(newPage: PageContent) {
    this.page = newPage;
  }

  setNewTitle(newTitle: string) {
    this.page.pageTitle = newTitle;
  }

  setNewHeader(newHeader: string, newHeaderHtml: string) {
    this.page.header = newHeader;
    this.page.headerHTML = newHeaderHtml;
  }

  setNewMainContent(newMainContent: string, newMainContentHtml: string) {
    this.page.mainContent = newMainContent;
    this.page.mainContentHTML = newMainContentHtml;
  }

  setNewFooter(newFooter: string, newFooterHtml: string) {
    this.page.footer = newFooter;
    this.page.footerHTML = newFooterHtml;
  }

  setNewCss(newCss: string) {
    this.page.css = newCss;
  }

}
