import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMarqueComponent } from './show-marque.component';

describe('ShowMarqueComponent', () => {
  let component: ShowMarqueComponent;
  let fixture: ComponentFixture<ShowMarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
