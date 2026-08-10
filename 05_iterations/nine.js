const myNums = [1, 2, 3]


// Using function
// const myTotal = myNums.reduce(function (acc, currval) {
// console.log(`acc: ${acc} and currval: ${currval}` );
// return acc + currval
// }, 0)
// console.log(myTotal);

// Using Arrow Function
const myTotal = myNums.reduce( (acc, curr) =>   acc+curr, 0  )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "RN Expo",
        price: 4999
    },
    {
        itemName: "RN CLI",
        price: 5999
    },
]

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
 console.log(pricetopay);

