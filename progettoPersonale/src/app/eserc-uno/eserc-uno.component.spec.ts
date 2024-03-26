import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercUnoComponent } from './eserc-uno.component';

describe('EsercUnoComponent', () => {
  let component: EsercUnoComponent;
  let fixture: ComponentFixture<EsercUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsercUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsercUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
