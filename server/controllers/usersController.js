// IMPORT DEPENDENCIES
// ---------------------------------------------------
const db = require('../models');

// DEFINING METHODS
// ---------------------------------------------------
module.exports = ({
    signUp: (user) => {
        console.log('sign up!')
    },

    signIn: (user) => {
        console.log('sign in!')
    },

    update: (user) => {
        console.log('updating')
    }
})