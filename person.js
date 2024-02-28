class Person {
    constructor(name, age, native, interest) {
        this.name = name;
        this.age = age;
        this.native= native ;
        this.interest= interest;
    }
    Details(){
        console.log(`The name is ${this.name} and my age is ${this.age} and my native is ${this.native} and i have interest in ${this.interest}`);
    }
}  


let Persons=[];
Persons.push(new Person("Karthik","25","tuticorin","cricket"));
Persons.push(new Person("Surya","23","Tirunelveli","Football"));
Persons.push(new Person("kavitha","22","Chennai","Hockey"));
Persons.push(new Person("Dinesh","24","Dindugal","Cricket"));
Persons.push(new Person("Prince","24","Salem","Cricket"));

for(let i=0; i<Persons.length; i++){
    Persons[i].Details();
}



