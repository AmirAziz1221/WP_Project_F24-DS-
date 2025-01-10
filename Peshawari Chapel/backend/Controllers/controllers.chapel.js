const Chapel = require('../Models/chapal.models');

// Create new chapel
const createChapel = async (req, res) => {
    try {
        // Fetch chapel data from body and destructure name and price
        const { name, price } = req.body;

        console.log('New chapel data: ', { name, price });

        // Creating new chapel object
        const chapel = new Chapel({ name, price });

        // Save the new chapel data
        const savedChapel = await chapel.save();

        console.log('New chapel saved successfully');
        // Send success response
        res.status(201).json({ message: 'Chapel created successfully', data: savedChapel });
    } catch (error) {
        console.log('Error occurred while saving chapel', error);
        // Send error response
        res.status(500).json({ message: 'Failed to create chapel', error: error.message });
    }
};

module.exports = createChapel;
