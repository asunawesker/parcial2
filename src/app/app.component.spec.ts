import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should instance the component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have information content', () => {
    const content = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(content.innerHTML).not.toBeNull();
    expect(content.innerHTML.length).toBeGreaterThan(0);
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
