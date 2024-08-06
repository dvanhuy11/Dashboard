import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractFeatureComponent } from './extract-feature.component';

describe('ExtractFeatureComponent', () => {
  let component: ExtractFeatureComponent;
  let fixture: ComponentFixture<ExtractFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
