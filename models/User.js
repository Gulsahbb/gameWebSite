const mongoose = require('mongoose')         //Veri tabanına bağlanmak için Mongoose'u tanımladık.

const UserSchema = new mongoose.Schema({            /*İstediğim bilgileri tutmak için mongoose.Schema'yı kullanıyorum */
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})


module.exports = mongoose.model('User', UserSchema) //User içerisinde bulunan PostSchemayı diğer sayfalarda da kullanabilmek için export ettik.