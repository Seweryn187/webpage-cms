import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsViewerComponent } from './cms-viewer.component';

describe('CmsViewerComponent', () => {
  let component: CmsViewerComponent;
  let fixture: ComponentFixture<CmsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
