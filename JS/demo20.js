function car(top_speed, acceleration, name, handling) {
            this.top_speed = top_speed;
            this.acceleration = acceleration;
            this.name = name;
            this.handling = Handle_it}
function Handle_it() {
    return this.acceleration / this.top_speed;
}

var c = new car(200, 50, 'Supra');

document.write(c.handling());
document.write(c.name.length);