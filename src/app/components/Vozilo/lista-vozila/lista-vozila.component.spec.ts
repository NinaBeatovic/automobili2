import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVozilaComponent } from './lista-vozila.component';

describe('ListaVozilaComponent', () => {
  let component: ListaVozilaComponent;
  let fixture: ComponentFixture<ListaVozilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVozilaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaVozilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
