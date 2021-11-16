import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidpointComponent } from './midpoint.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<MidpointComponent>;
    let component: MidpointComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        declarations: [
            MidpointComponent
        ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MidpointComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
    });

    it('should create a form with four controls', () => {
        expect(component.midpointForm.contains('x1')).toBeTruthy();
        expect(component.midpointForm.contains('y1')).toBeTruthy();
        expect(component.midpointForm.contains('x2')).toBeTruthy();
        expect(component.midpointForm.contains('y2')).toBeTruthy();
    });

    it('x1 should be required', () => {
        let control : any;
        control = component.midpointForm.get('x1');    
        control.setValue('');    
        expect(control.valid).toBeFalsy();
    });

    it('x2 should be required', () => {
        let control : any;
        control = component.midpointForm.get('x2');    
        control.setValue('');    
        expect(control.valid).toBeFalsy();
    });

    it('y1 should be required', () => {
        let control : any;
        control = component.midpointForm.get('y1');    
        control.setValue('');    
        expect(control.valid).toBeFalsy();
    });

    it('y2 should be required', () => {
        let control : any;
        control = component.midpointForm.get('y2');    
        control.setValue('');    
        expect(control.valid).toBeFalsy();
    });

    it('Should return "No se pueden utilizar letras" if one input has a String', () => {
        let control : any;
        let formula : any;

        control = component.midpointForm.get('x1');   
        control.setValue('a');    
        formula = component.onSubmit(); 

        expect(formula).toBe("No se pueden utilizar letras");
    });
    it('Should return "No se pueden utilizar letras" if two inputs have a String', () => {
        let control_1 : any; let control_2 : any;
        let formula : any;

        control_1 = component.midpointForm.get('x1');   
        control_1.setValue('a');  
        control_2 = component.midpointForm.get('x2');   
        control_2.setValue('b');    
        formula = component.onSubmit(); 

        expect(formula).toBe("No se pueden utilizar letras");
    });

    it('Should return "No se pueden utilizar letras" if three inputs have a String', () => {
        let control_1 : any; let control_2 : any; let control_3 : any; 
        let formula : any;

        control_1 = component.midpointForm.get('x1');   
        control_1.setValue('a');  
        control_2 = component.midpointForm.get('x2');   
        control_2.setValue('b');    
        control_3 = component.midpointForm.get('y1');   
        control_3.setValue('c');   
        formula = component.onSubmit(); 
        
        expect(formula).toBe("No se pueden utilizar letras");
    });

    it('Should return "No se pueden utilizar letras" if four inputs have a String', () => {
        let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
        let formula : any;

        control_1 = component.midpointForm.get('x1');   
        control_1.setValue('a');  
        control_2 = component.midpointForm.get('x2');   
        control_2.setValue('b');    
        control_3 = component.midpointForm.get('y1');   
        control_3.setValue('c');   
        control_4 = component.midpointForm.get('y2');   
        control_4.setValue('c');   
        formula = component.onSubmit(); 
        
        expect(formula).toBe("No se pueden utilizar letras");
    });

    it('Should return { x: 0, y: 0 } if the result is correct', () => {
        let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
        let formula : any;

        control_1 = component.midpointForm.get('x1');   
        control_1.setValue('1');  
        control_2 = component.midpointForm.get('x2');   
        control_2.setValue('-1');    
        control_3 = component.midpointForm.get('y1');   
        control_3.setValue('2');   
        control_4 = component.midpointForm.get('y2');   
        control_4.setValue('-2');   
        formula = component.onSubmit(); 
        
        expect(formula).toEqual({ x: 0, y: 0 });
    });

    it('Should return { x: -2, y: 4 } if both points are only composed by numbers', () => {
        let control_1 : any; let control_2 : any; let control_3 : any; let control_4 : any;
        let formula : any;

        control_1 = component.midpointForm.get('x1');   
        control_1.setValue('2');  
        control_2 = component.midpointForm.get('x2');   
        control_2.setValue('-6');    
        control_3 = component.midpointForm.get('y1');   
        control_3.setValue('-5');   
        control_4 = component.midpointForm.get('y2');   
        control_4.setValue('13');   
        formula = component.onSubmit(); 
        
        expect(formula).toEqual({ x: -2, y: 4 });
    });
});
