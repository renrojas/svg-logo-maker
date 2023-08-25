const {Circle, Square, Triangle} = require("./shapes.js")

describe('Triangle', () => {
    test('render SVG for blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        shape.setText("KR", "yellow");
       // expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        expect(shape.render()).toEqual(`
        <svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="yellow">KR</text>
        `);
    })
})



