// const ball = {
//     color: 'black',
//     shape: 'circle',
//     price: 150,
//     isCleaned: true
// }
//keys

// const keys = Object.keys(ball)
// console.log(keys);

//values

// const values = Object.values(ball)

// console.log(values);

// const pair = Object.entries(ball)
// console.log(pair);

// // Object.seal(ball);
// delete ball.isCleaned
// ball.price = 200;

// console.log(ball);


// Object.freeze(ball)
// ball.price = 500;

// delete ball.shape;
// console.log(ball);

const bolls = {
    color: 'black',
    shape: 'circle',
    price: 150,
    isCleaned: true
}

for (const boll in bolls) {
    // console.log(boll, bolls[boll]);
}


const keys = Object.keys(bolls);
// console.log(keys);
for (const key of keys) {
    // console.log(key, bolls[key]);

}

const entries = Object.entries(bolls);
// console.log(entries);

// const [key,value]=['color',''yellow]

for (const [key, value] of Object.entries(bolls)) {
    console.log(key, value);
}










