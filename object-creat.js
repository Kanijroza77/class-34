const eShikhon = { name: "eShikhon.com", job: "training institute" }
// console.log(eShikhon);

const person = new Object();
// console.log(person);

const metarial = Object.create(eShikhon);
// console.log(metarial.job);


class people {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
}

const pepo = new people('kanij roza', 23)
console.log(pepo);




