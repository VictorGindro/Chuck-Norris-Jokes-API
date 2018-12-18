const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    id: {type: String},
    email: {type: String},
    senha: {type: String},
})
// Export the model
module.exports = mongoose.model('User', UserSchema);