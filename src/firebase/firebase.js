import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//     console.log('wok');
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//     console.log('child added');
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//        const expenses = [];

//        snapshot.forEach((childSnapshot) => {
//            expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val()
//            });
//        });

//        console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });


// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: 109500,
//     createAt: 97448848448
// });

// database.ref('notes/-LGFm283E_Y2j6kD-jDF').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, python'
// });

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', 0);
//     });

// database.ref().set({
//    name: 'Jordan Brutus',
//    age: 26,
//    stressLevel: 6,
//    job: {
//        title: 'Software Developer',
//        company: 'Google'
//    },
//    location: {
//        city: 'Stamford',
//        country: 'United States'
//    }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     'job/company': 'Amazon',
//     'stressLevel': '9',
//     'location/city': 'Seattle'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('data was removed');
//     })
//     .catch((e) => {
//         console.log('data was not removed', e)
//     });
