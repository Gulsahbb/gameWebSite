const express = require('express')  //Express.js modülünü burada da aktif etmek için yeniden express'i tanımladım.
const Post = require('../models/Post')      //Models'deki Post sayfası içindeki schemayı kullanabilmek için burada Post isimli bir nesne oluşturdum.
const router = express.Router()     //Yönlendirme yapabilmek için router'ı burada tanımladım.

router.get('/', (req, res) => {    //Main.js'de websitede bulunan sayfalara ulaşabilmek için router içerisinde get() metodunu çağırarak yönlendirmek istediğim
    console.log(req.session)       //sayfaları içerisine yazıyorum.       
    res.render('site/index');      //Anasayfaya ulaşabilmek için site dosyası içerisindeki index.handlebars sayfasına yönlendirdim.
})

router.get('/games', (req, res) => {       //Aynı şekilde diğer sayfalar için de aynı işlemi gerçekleştirdim.
    res.render('site/games');
})

router.get('/gamesugg', (req, res) => {
    res.render('site/gamesugg');
})

router.get('/comments', (req, res) => {
    Post.find({}).lean().then(posts => {                //Veri tabanındaki verileri getirmesi ve bu postları site/comments içine göndermesi için 
        res.render('site/comments', { posts: posts })   //Post içerisindeki shcemaya uygun bilgileri find() fonksiyonunu kullandım. Daha sonra bu verileri 
    })                                                  //comments.handlebars'ta belirlediğim kısımlara yazması için render ettim.
})

 router.get('/comm', (req, res) => {
    res.render('site/comm');
}) 
 
module.exports = router