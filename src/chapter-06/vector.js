const _vector = {
    setX: function setX(x) { this.x = x; },
    setY: function setY(y) { this.y = y; },
    plus: function plus(vector) {
        const newVector = Object.create(_vector);
        newVector.setX(this.x + vector.x);
        newVector.setY(this.y + vector.y);
        return newVector;
    },
    minus: function minus(vector) {
        const newVector = Object.create(_vector);
        newVector.setX(this.x - vector.x);
        newVector.setY(this.y - vector.y);
        return newVector;
    },
    get length() {
        return Math.sqrt(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2));
    }
};

function Vector(x, y) {
    const newVector = Object.create(_vector);
    newVector.setX(x);
    newVector.setY(y);
    return newVector;
}

module.exports = Vector;
