export class Midpoint {
    punto = {
        x: 0,
        y: 0,
    }

    public midpoint(x1: number, y1: number, x2:number, y2:number){
        this.punto.x = (x1+x2)/2;
        this.punto.y = (y1+y2)/2;

        return this.punto;
    }
}