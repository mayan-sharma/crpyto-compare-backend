const mongoose = require('mongoose');

const comparisonSchema = new mongoose.Schema({
    coins: {
        type: String
    }
});

module.exports = mongoose.model('Comparison', comparisonSchema);