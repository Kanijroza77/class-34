
const student = {
    id: 101,
    name: 'kanij roza',
    money: 5000,
    isRich: false,
    subject: ['english', 'math', 'accounting'],
    bestFriend: {
        name: "Rishad hossain",
        mejor: 'bangla'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDay: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money
    }

}

// student.takeExam();

const remaining = student.treatDay(900, 100)
console.log(remaining);









