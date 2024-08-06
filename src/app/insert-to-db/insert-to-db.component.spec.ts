import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertToDBComponent } from './insert-to-db.component';

describe('InsertToDBComponent', () => {
  let component: InsertToDBComponent;
  let fixture: ComponentFixture<InsertToDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertToDBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertToDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
