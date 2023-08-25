const {Circle, Square, Triangle} = require("./shapes.js")

describe('Triangle', () => {
    test('render SVG for blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        shape.setText("KR", "yellow");
        expect(shape.render()).toEqual(`
        <svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="yellow">KR</text>
        `);
    })
})


describe('Circle', () => {
    test('render SVG for pink circle', () => {
        const shape = new Circle();
        shape.setColor("pink");
        shape.setText("GHJ", "yellow");
        expect(shape.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="pink" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">GHJ</text></svg>`);
    })
})


describe('Square', () => {
    test('render SVG for green square', () => {
        const shape = new Square();
        shape.setColor("green");
        shape.setText("ASD", "red");
        expect(shape.render()).toEqual(`
        <svg version="1.1"
        width="150" height="150"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="green" />
        <text x="75" y="90" font-size="60" text-anchor="middle" fill="red">ASD</text></svg>
        `);
    })
})

