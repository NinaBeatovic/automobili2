import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVozilaRadnikComponent } from './lista-vozila-radnik.component';

describe('ListaVozilaRadnikComponent', () => {
  let component: ListaVozilaRadnikComponent;
  let fixture: ComponentFixture<ListaVozilaRadnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVozilaRadnikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaVozilaRadnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
