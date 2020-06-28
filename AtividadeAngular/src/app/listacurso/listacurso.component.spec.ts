import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacursoComponent } from './listacurso.component';

describe('ListacursoComponent', () => {
  let component: ListacursoComponent;
  let fixture: ComponentFixture<ListacursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
