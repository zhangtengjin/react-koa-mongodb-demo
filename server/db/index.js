const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/qingyi';

function connect () {
    mongoose.connect(dbUrl, {
        useUnifiedTopology: true
    }, err => {
        if (err) {
            console.log(`=======  Error connecting to mongoDB =======`);
            console.log(`Error Reason: ${err}`);
        } else {
            console.log(`======= Succeeded in connecting to mongoDB =======`);
        }
    })
}
module.exports = { connect }

