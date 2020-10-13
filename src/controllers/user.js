const client = require('../dbClient')

module.exports = {
    create: (user, callback) => {
        // Check parameters
        if (!user.username)
            return callback(new Error("Wrong user parameters"), null)
        // Create User schema
        const userObj = {
            firstname: user.firstname,
            lastname: user.lastname,
        }
        // Save to DB
        // TODO check if user already exists
        if (!res) {
            client.hmset(user.username, userObj, (err, res) => {
                if (err) return callback(err, null)
                callback(null, res) // Return callback
            })
        }

    },
    // get: (username, callback) => {
    //   // TODO create this method
    // }
    get: function (username, callback) {

        // Get from DB
        client.hmget(username, ["firstname", "lastname"], (err, res) => {
            if (err) return callback(err, null)
            callback(null, res) // Return callback
        })

    }
}