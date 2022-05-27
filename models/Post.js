const mongoose = require('mongoose')        //Veri tabanına bağlanmak için Mongoose'u tanımladık.

const PostSchema = new mongoose.Schema({    /*İstediğim bilgileri tutmak için mongoose.Schema'yı kullanıyorum */
    username: { type: String, unique: true, required: true },  /*username tekil ve zorunlu */
    title: { type: String, unique: true, required: true }, /*Girilmesi zorunlu*/
    comment: { type: String, unique: true, required: true },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Post', PostSchema) //Post içerisinde bulunan PostSchemayı diğer sayfalarda da kullanabilmek için export ettik.