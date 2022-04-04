import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VerticalDisplayComponent} from './vertical-display.component';

describe('VerticalDisplayComponent', () => {
  let component: VerticalDisplayComponent;
  let fixture: ComponentFixture<VerticalDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
