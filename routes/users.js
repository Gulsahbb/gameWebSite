const express = require('express')
const router = express.Router()
const User = require('../models/User')  //Models'deki User sayfası içindeki schemayı kullanabilmek için burada User isimli bir nesne oluşturdum.

router.get('/register', (req, res) => {
    res.render('site/register')
})


router.post('/register', (req, res) => {
    User.create(req.body, (error, user) => {           //Kullanıcı kayıtol sayfasından değerler girip kayıt olunduğunda yeni bir kullanıcı oluştur
        console.log(req.body)                          //Ve bu kullanıcı değerlerini terminale yaz.
        res.redirect('/users/register')                //Direkt olarak kullanıcı kayıt sayfasına yönlendir 
    })
})

router.get('/signin', (req, res) => {           //Header bölümünde girişyap kısmına tıkladığımızda bizi site içerisindeki griş yap sayfasına yönlendiriyor.
    res.render('site/signin');
})


router.post('/signin', (req, res) => {
    const { email, password } = req.body            //Giriş yap sayfasında mail ve şifre girildiğinde eğer giren kişinin şifresi si ile veri tabanında kayıtlı olan 
    User.findOne({ email }, (error, user) => {      // şifresi si eşleşiyorsa ve id'ler eşleşiyorsa direkt ana sayfaya yönlendir. Eğer ki eşleşmiyorsa kayıt ol
        if (user) {                                 //sayfasına yönlendir.
            if (user.password == password) {
                req.session.userId = user._id
                res.redirect('/')
            } else {
                res.redirect('/users/signin')
            }
        } else {
            res.redirect('/users/register')
        }
    })
})

module.exports = router