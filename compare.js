// const first = { a: 1, b: 2 }
// const second = { a: 1, b: 2 }
// const third = first;

// if (first == third) {

//     console.log('object are same');
// } else {

//     console.log('object are not same');
// }

// const first2 = { a: 1, b: 2, c: 2 }
// const second2 = { a: 1, b: 2 }

// console.log(JSON.stringify(first2));
// console.log(JSON.stringify(second2));
// if (JSON.stringify(first2) == JSON.stringify(second2)) {
//     console.log('object are equal');
// } else {

//     console.log('object are not equal');
// }


const kanijroza = {
    id: 101,
    money: 5000,
    name: 'kanij',
    treatDay: function (expense) {
        this.money = this.money - expense
        console.log('555', this);
        return this.money;
    }
}


const ami = {
    id: 102,
    money: 6000,
    name: 'ami'

}

const heroAlom = {
    id: 103,
    money: 8000,
    name: 'Hero Alom '
}

kanijroza.treatDay(100)
const amiTreatDay = kanijroza.treatDay.bind(ami)

amiTreatDay(500)
const heroTreatDay = kanijroza.treatDay.bind(heroAlom)
// console.log(heroTreatDay);

heroTreatDay(1000)



