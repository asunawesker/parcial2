import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InformationComponent } from './information.component';

describe('InformationComponent', () => {
  let fixture: ComponentFixture<InformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        InformationComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationComponent);
    fixture.detectChanges();
  });

  it('should have my fullname as a h1', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.innerHTML).not.toBeNull();
    expect(h1.textContent).toContain('Iraís Aguirre Valente');
  });

  it('should have my basic information', () => {
    const information = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(information.innerHTML).not.toBeNull();
    expect(information.textContent).toContain('Unit Testing - Pruebas de softwareEstudiante de Ingeniería de softwareS19004913');
  });

});