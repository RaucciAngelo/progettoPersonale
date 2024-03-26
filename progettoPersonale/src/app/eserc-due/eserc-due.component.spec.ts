import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercDueComponent } from './eserc-due.component';

describe('EsercDueComponent', () => {
  let component: EsercDueComponent;
  let fixture: ComponentFixture<EsercDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsercDueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsercDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
