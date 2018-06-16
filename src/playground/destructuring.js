// const person = {
//     name: 'Jordan',
//     age: 26,
//     location: {
//         city: 'Stamford',
//         temp: 55
//     }
// };

// const { name = 'Blank', age } = person;
// // const name = person.name;

// console.log(`${name} is ${age}.`)

// console.log(`It's ${person.location.temp} in ${person.location.city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

//console.log(`${publisherName}`);

const address = ['1299 S Juniper Street', 'Stamford', 'Connecticut', '06869'];

const [, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [type, , medium] = item;

console.log(`A medium ${type} costs ${medium}`);