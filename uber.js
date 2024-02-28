class Uber {
    constructor(Destination='',Price=0,BaseFee=20){
        this.Destination = Destination;
        this.Price = Price;
        this.BaseFee = BaseFee;
    }
    getPrice(){
        return this.Price;
    }
    setPrice(Price){
        this.Price = Price;
    }
    getFinalPrice(){
        return this.Price * this.BaseFee;
    }
}
let Ride1 = new Uber("Chennai",0);
Ride1.setPrice(100);
console.log("UberRide to chennai costs around :",Ride1.getFinalPrice());

let Ride2 = new Uber("Banglore",0);
Ride2.setPrice(150);
console.log("UbderRide to banglore costs around:",Ride2.getFinalPrice());

let Ride3 = new Uber("Madurai",0);
Ride3.setPrice(50);
console.log("UberRide to Madurai costs around:",Ride3.getFinalPrice());

let Ride4= new Uber("Tuticorin",0);
Ride4.setPrice(200);
console.log("UberRide to Tuticorin costs around:",Ride4.getFinalPrice());
