//Create a constructor function that receive product details
//(productName,prise,inventory) thin build a method to display this data in clear
//outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

/*function Product(productName, price, inventory) {
  this.productName = productName;
  this.price = price;
  this.inventory = inventory;
  this.print = function () {
    console.log(
      `Product: ${this.productName}. Selling price is ${this.price}€. We have ${this.inventory} left stock.`
    );
  };
}
let pepsi = new Product("Pepsi", 2.5, 105);
pepsi.print();

// get & set, create a car object that uses getter and setter method to get and
//set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const car = {
  modelName: "BWM",
  modelNumber: 2000,
  engineCapacity: "High",
  get carDetails() {
    console.log(`${this.modelName} ${this.modelNumber} ${this.engineCapacity}`);
  },
  set carDetails(str) {
    let arr = str.split(" ");
    console.log(arr);
    this.modelName = arr[0];
    this.modelNumber = arr[1];
    this.engineCapacity = arr[2];
  },
};

//Get Object Data
car.carDetails; // getting the object data

//Set Object Data
car.carDetails = "VW 1998 Low";
car.carDetails; */

class Tv {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    this.volume++;
  }
  decVolume() {
    this.volume--;
  }
  rest() {
    // volume and channel
  }
}

const louder = Tv.incVolume;
console.log(louder);
