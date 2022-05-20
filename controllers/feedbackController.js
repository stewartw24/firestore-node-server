'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();

const addFeedback = async (req, res, next) => {
    try {
        const data = req.body;
        req.body.date = new Date().toLocaleString();
        await firestore.collection('feedback').doc().set(data);
        res.send('feedback received');
    } catch(error) {
        res.status(404).send(error.message);
    }
}

module.exports = {
    addFeedback
}