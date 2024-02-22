function car() {
    var inputElement = document.getElementById("inputString");
    var inputElement = document.getElementById("inputNum");
    var resultElement = document.getElementById("result");
    class Car {
        constructor(color, manufacturer) {
            this.color = color;
            this.manufacturer = manufacturer;
        }
    }

    class RaceCar extends Car {
        constructor(numberOfSeats, manufacturer) {
            super('Red', manufacturer);
            this.numberOfSeats = numberOfSeats;
        }
    }

    const car1 = new Car('Red', 'Audi');
    const raceCar1 = new RaceCar(2, 'Audi');

    console.log(car1);
    console.log(raceCar1);


}