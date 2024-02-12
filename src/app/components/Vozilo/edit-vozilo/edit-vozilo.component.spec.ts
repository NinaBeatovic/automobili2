import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVoziloComponent } from './edit-vozilo.component';

describe('EditVoziloComponent', () => {
  let component: EditVoziloComponent;
  let fixture: ComponentFixture<EditVoziloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVoziloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVoziloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
