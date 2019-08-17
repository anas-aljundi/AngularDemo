
export class Point {
    constructor(private _x?: number, private _y?: number) {}

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0) throw new Error('it should be great than 0');

        this._x = value;
    }

    draw() {
        console.log('X: ' + this._x +', Y: ' + this._y);
    }
}