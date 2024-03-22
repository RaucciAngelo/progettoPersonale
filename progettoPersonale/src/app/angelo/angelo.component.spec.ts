import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngeloComponent } from './angelo.component';

describe('AngeloComponent', () => {
  let component: AngeloComponent;
  let fixture: ComponentFixture<AngeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
