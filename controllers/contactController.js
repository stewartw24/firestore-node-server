'use strict';

const firebase = require('../db');
// const Contact = require('../models/contact');
const firestore = firebase.firestore();

const addContact = async (req, res, next) => {
    try {
        const data = req.body;
        req.body.date = new Date().toLocaleString();
        await firestore.collection('contact').doc().set(data);
        res.send('message received');
    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports = {
    addContact
}
