// backend\hashPassword.js
const bcrypt = require('bcryptjs');

bcrypt.hash('password123', 10, (err, hash) => {
    if (err) throw err;
    console.log("Hashed password:", hash);
});
