const user = {id:1, name: 'Gorib Amir', job: true};
// JavaScript Object Notation => JSON
const stringified = JSON.stringify(user)
const x = JSON.parse(stringified)
// console.log(user)
// console.log(stringified)
// console.log(x)

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

console.log(shop)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON)
const returnJSON = JSON.parse(shopJSON);
console.log(returnJSON)