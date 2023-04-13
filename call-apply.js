const kanijroza = {
    id: 101,
    money: 5000,
    name: 'kanij',
    treatDay: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax
        console.log('555', this);
        return this.money;
    }
}


const heroKingKhan = {
    id: 102,
    money: 6000,
    name: 'ami'

}



const heroSalmanKhan = {
    id: 103,
    money: 8000,
    name: 'Hero Alom '
}

//call

// kanijroza.treatDay.call(heroKingKhan, 500, 100, 50)
// kanijroza.treatDay.call(heroSalmanKhan, 500, 100, 50)
kanijroza.treatDay.apply(heroKingKhan, [500, 100, 50])

kanijroza.treatDay.apply(heroSalmanKhan, [1500, 200, 100])
