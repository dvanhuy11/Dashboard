import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectFaceComponent } from './detect-face.component';

describe('DetectFaceComponent', () => {
  let component: DetectFaceComponent;
  let fixture: ComponentFixture<DetectFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectFaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetectFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
