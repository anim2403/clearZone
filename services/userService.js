const User = require('../models/User');

exports.createUser = async ({
    firstName, lastName, email, password, userType
}) => {
    if (!firstName || !email || !password) {
        throw new Error('Required fields are missing');
    }
    
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        userType,
    })

    return user;
}
