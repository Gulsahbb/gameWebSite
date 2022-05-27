const express = require('express')  //Express.js modülünü aktif etmek için burada express'i tanımladım.
const app = express()
const { engine } = require('express-handlebars');
const port = 3000
const hostname = '127.0.0.1';
const mongoose = require('mongoose')   //Kodumda Mongodb'ye bağlanmak için mongoose'u burada çağırıyorum. 
const bodyParser = require('body-parser')
const generateDate = require('./helpers/generateDate').generateDate  //Gün Ay Yıl ayarlamak için tanımladım.
const expressSession = require('express-session')

mongoose.connect('mongodb://127.0.0.1/myProject', {   //MongoDB bağlantısını burada kurduk.

})

app.use(expressSession({
    secret: 'testotesto',
    resave:false,
}))

app.use(express.static('public'))


app.engine('handlebars', engine({ helpers: { generateDate: generateDate } }));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())


const main = require('./routes/main')       //routes klasörü içindeki bilgileri bütün sayfalarda kullanabilmek için burada tanımladık.
const posts = require('./routes/posts')
const users = require('./routes/users')

app.use('/', main)
app.use('/comments', posts) //Burada da tanımladığımız nesneleri istediğimiz yere yönlendirdik 
app.use('/users', users)

app.listen(port, hostname, () => {
    console.log(` Server çalışıyor, http://${hostname}:${port}/`)  //Server'ın çalışıp çalışmadığını kontrol etmek için app içinde listen() metodunu çağırdım.
})                                                                 //terminale yazdırmak için de console.log()'u kullandım.




