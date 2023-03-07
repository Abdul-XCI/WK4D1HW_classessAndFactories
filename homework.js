// creating class
class Hamster {
    constructor(name)
    {
        this.owner ="";
        this.price = 15;

        this.name = name;
    }

    wheelRun()
    {
        console.log("Squeak Squeak");
    }

    eatFood()
    {
        console.log("Nibble Nibble");
    }

    getPrice()
    {
        return this.price;
    }
}