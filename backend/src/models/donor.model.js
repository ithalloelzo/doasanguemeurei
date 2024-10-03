export class Donor {
    constructor(name, age, bloodType, weight, cep){
        this.id = Math.random(1000 - 1); + 1;
        this.name = name;
        this.age = age;
        this.bloodType = bloodType;
        this.weight = weight;
        this.cep = cep
    }
}

