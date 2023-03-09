// creating class
class Hamster {
    constructor(name, price = 15, owner = "")
    {
        this.name = name;
        this.owner = owner;
        this.price = price;
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
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0)
    {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }

    getName()
    {
        return this.name;
    }

    getAge()
    {
        return this.age;
    }

    getWeight()
    {
        return this.weight;
    }

    greet(personName)
    {
        console.log(`Hello ${personName}.`);
    }

    eat()
    {
        this.weight++;
        this.mood++;
    }

    exercise()
    {
        this.weight--;

    }

    ageUp()
    {
        this.age++;
        this.height++
        this.weight++;
        this.mood--;
        this.bankAccount+= 10;
    }

    buyHamster(hamsterObj)
    {
        this.hamsters.push(hamsterObj);
        this.mood += 10;
        this.bankAccount -= hamsterObj.getPrice();

    }

}


// instantiates a new person
const personTimmy = new Person('Timmy', 5)

// have timmy eat five times
for (let i = 0; i < 5; i++){
    personTimmy.eat();
}
//console.log('Have Timmy eat five times - We expect weight to increase');
//console.log(personTimmy);

// have timmy exercise 5 times
for (let i = 0; i < 5; i++){
    personTimmy.exercise();
}
//console.log('Have Timmy exercise five times - We expect weight to decrease');
//console.log(personTimmy);


// age Timmy 9 years
for (let i = 0; i < 9; i++){
    personTimmy.ageUp();
}

// creat a hasmter named gus
const hamsterGus = new Hamster('Gus', 0, 'Timmy')

// have timmy buy gus
personTimmy.buyHamster(hamsterGus); 

// age timmy 15 years
for (let i = 0; i < 15; i++){
    personTimmy.ageUp();
}

// have timmy eat twice
for (let i = 0; i < 2; i++){
    personTimmy.eat();
}

// have timmy exercise twice
for (let i = 0; i < 2; i++){
    personTimmy.exercise();
}


class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;

    }
}

class Chef 
{
  constructor(chefName)
  {
    this.chefName = chefName;
    this.dinnersCooked = [];
    
  }

  cookDinner(item1, item2, item3)
  {
    
    const newDinner = new Dinner(item1, item2, item3);
    //console.log(newDinner)
    this.dinnersCooked.push(newDinner);
    
  }

  listDinnersCooked()
  {
    //console.log(this.dinnersCooked)
    console.log(`Chef ${this.chefName} cooked the following dinners: `, this.dinnersCooked);
  }
}

const chefAbdul = new Chef('Abdul')

// let the chef cook 3 dinners
chefAbdul.cookDinner('Spinach and artichoke dip', 'Vegetarian lasagna', 'Chocolate Lave');
chefAbdul.cookDinner('Crispy fried calamari', 'Grilled chicken', 'creamy custard');
chefAbdul.cookDinner('Grilled shrimp skewers', 'Grilled salmon', 'Cheesecake ');

// Log the dinners the chef cooked
chefAbdul.listDinnersCooked();
