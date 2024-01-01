const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

// Use body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'mainPageView.html'));
});

router.post('/', (req, res) => {
    // Obtaining value from html
    var age = Number(req.body.age);
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var gender = req.body.gender;
    var unitOption = req.body.unitSelector;

    // Calculation of BMI 
    if (unitOption == 'imperial') {
        sqHeight = Math.pow(height, 2)
        totalBMI = (weight / sqHeight) * 703;
    } else {
        var sqHeight = Math.pow(height / 100, 2);
        var totalBMI = weight / sqHeight;
    }

    // Comments for result of BMI
    var commentsForBMI = 'Normal';
    if (gender && (gender == 'male' || gender == 'female')) {
        if (age <= 18) {
            if (totalBMI < 15) {
                commentsForBMI = 'Low';
            } else if (totalBMI >= 23) {
                commentsForBMI = 'High';
            } else {
                commentsForBMI = 'Normal';
            }
        } else {
            if (totalBMI < 18.5) {
                commentsForBMI = 'Low';
            } else if (totalBMI > 24.9) {
                commentsForBMI = 'High';
            } else {
                commentsForBMI = 'Normal';
            }
        }
    }

    const resultMessage = `${gender && gender.charAt(0).toUpperCase() + gender.slice(1)}, ${age} years old with ${weight} ${unitOption === 'imperial' ? "lb" : "kg"}, ${height} ${unitOption === 'imperial' ? "in" : "cm"}. Total BMI is ${totalBMI.toFixed(2)}, which is ${commentsForBMI} for this person.`;
    res.redirect(`/?result=${encodeURIComponent(resultMessage)}`);
});


module.exports = router;