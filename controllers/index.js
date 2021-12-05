const Comparison = require('../models/Comparison');

// returns comparisons from db
exports.getComparisons = async(req, res) => {
    try {
        const comparisons = await Comparison.find({});

        return res.status(200).json({
            message: 'Comparisons fetched successfully!',
            comparisons
        });

    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error!'
        })
    }
}

// stores a comparison in db
exports.postComparison = async(req, res) => {
    try {
        // get selected coins from req body
        const coins = req.body.coins;
        await Comparison.create({ coins });

        return res.status(200).json({
            message: 'Comparison stored successfully'
        });

    } catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error!'
        })
    }
}