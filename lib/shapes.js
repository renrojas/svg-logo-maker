class Circle {
    constructor() {
        this.text = "";
        this.textColor = "";
        this.shapeColor = "";
    }
    setColor(color) {
        this.shapeColor = color
    }
    setText(text, color) {
        this.text = text
        this.textColor = color
    }
    render() {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }

}
class Square {
    constructor() {
        this.text = "";
        this.textColor = "";
        this.shapeColor = "";
    }
    setColor(color) {
        this.shapeColor = color
    }
    setText(text, color) {
        this.text = text
        this.textColor = color
    }
    render() {
        return `
        <svg version="1.1"
        width="150" height="150"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${this.shapeColor}" />
        <text x="75" y="90" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>
        `
    }
}
class Triangle {
    constructor() {
        this.text = "";
        this.textColor = "";
        this.shapeColor = "";
    }
    setColor(color) {
        this.shapeColor = color
    }
    setText(text, color) {
        this.text = text
        this.textColor = color
    }

    render() {
        return `
        <svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        `
    }
}
module.exports = {
    Circle, Square, Triangle
}