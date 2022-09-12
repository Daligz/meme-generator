import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewComponentComponent } from './image-view-component.component';

describe('ImageViewComponentComponent', () => {
  let component: ImageViewComponentComponent;
  let fixture: ComponentFixture<ImageViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageViewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
