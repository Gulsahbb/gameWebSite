const express = require('express')
const router = express.Router()
const Post = require('../models/Post') //Models'deki Post sayfası içindeki schemayı kullanabilmek için burada Post isimli bir nesne oluşturdum.


router.get('/comments', (req, res) => {    //Kayıtlı kullnaıcı id si ile girilen kullanıcı idsi eşleşiyor ise yorum sayfasında kalmasını,eğer eşleşmiyorsa
   if (req.session.userId == user._id) {   //giriş yapması için giriş sayfasına yönlendirilmesini istedim.Fakat...
      return res.render('site/comments')
   } else {
      return res.redirect('/users/signin')       //middleware kulan?
   }
})
router.post('/test', (req, res) => {
   Post.create(req.body)      //Veri tabanında yeni yorum oluşturma
   res.redirect('/comments')
})

module.exports = router
