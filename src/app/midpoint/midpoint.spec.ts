import { Midpoint } from './midpoint';

describe('Midpoint formula', () => {
    let formula: Midpoint;

    beforeEach(() => {
        formula = new Midpoint();
      });
    
    it('should show the middle point (1,7)', () => {
        let midpoint = formula.midpoint(3, 9, -1, 5);
        
        let midpointWaited = {
            x: 1,
            y: 7,
        };

        expect(midpoint).toEqual(midpointWaited);
    });   
    
    it('the middle point should be on the origin', () => {
        let midpoint = formula.midpoint(7, 12, -7, -12);

        let midpointWaited = {
            x: 0,
            y: 0,
        };

        expect(midpoint).toEqual(midpointWaited);
    });

    it('abscissa should be on the origin and the midpoint should be (0, 2)', () => {
        let midpoint = formula.midpoint(1, 2,-1, 2);

        let midpointWaited = {
            x: 0,
            y: 2,
        };

        expect(midpoint).toEqual(midpointWaited);
    });

    it('ordinate should be on the origin and the midpoint should be (5, 0)', () => {
        let midpoint = formula.midpoint(5, 2, 5, -2);

        let midpointWaited = {
            x: 5,
            y: 0,
        };

        expect(midpoint).toEqual(midpointWaited);
    });
})