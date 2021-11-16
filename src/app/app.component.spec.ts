import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MidpointComponent } from '../app/form-midpoint/midpoint.component';

describe('AppComponent', () => {
  let fixtureApp: ComponentFixture<AppComponent>;
  let fixtureMidpoint: ComponentFixture<MidpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MidpointComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixtureApp = TestBed.createComponent(AppComponent);
    fixtureApp.detectChanges();
    fixtureMidpoint = TestBed.createComponent(MidpointComponent);
    fixtureMidpoint.detectChanges();
  });

  it('should instance the component', () => {
    const fixtureApp = TestBed.createComponent(AppComponent);
    const app = fixtureApp.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have content on the page', () => {
    const content = fixtureApp.debugElement.query(By.css('body')).nativeElement;
    expect(content.innerHTML).not.toBeNull();
    expect(content.innerHTML.length).toBeGreaterThan(0);
  });

  it('Should have "Calcular" in calcular button', () => {
    const btn = fixtureMidpoint.debugElement.nativeElement.querySelector('#btnCalculate');
    expect(btn.innerHTML).toBe('Calcular');
  });
});
