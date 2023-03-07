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

// Person class
class Person 
{
    constructor(name)
    {
        this.name = name;

        age = 0;
        height = 0;
        weight = 0;
        mood = 0;
        hamsters = [];
        bankAccount = 0;
    }

    getName()
    {
        return this.name;
    }

    getAge()
    {
        return age;
    }

    getWeight()
    {
        return weight;
    }

    greet(personName)
    {
        console.log(`Hello ${personName}.`);
    }

    eat()
    {
        weight++;
        modd++;
    }

    exercise()
    {
        weight--;

    }

    ageUp()
    {
        age++;
        height++
        weight++;
        mood--;
        bankAccount+= 10;
    }

    buyHamster(hamsterObj)
    {
        hamsters.push(hamsterObj);
        mood += 10;
        bankAccount -= hamsterObj.getPrice();

    }

}