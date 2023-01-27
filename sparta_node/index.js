const express = require('express')
const app = express()
const port = 4500

//template engine
app.get('/', (req, res) => {
    res.send('<!DOCTYPE html>\
    <html lang="en">\
    <head>\
        <meta charset="UTF-8">\
        <meta http-equiv="X-UA-Compatible" content="IE=edge">\
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
        <title>Document</title>\
    </head>\
    <body>\
        Hi. I am with html<br>\
        <a href="/hi">Say Hi!</a>\
    </body>\
  </html>') })

//ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', {name});
})
//상품 목록
const goodsRouter = require('./routes/goods');
app.use('/goods', goodsRouter);
//유저 목록
const userRouter = require('./routes/user');
app.use('/user', userRouter);
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

//middleware => web서버에 요청할 때 url 이외의 정보 제공 가능 
app.use(express.urlencoded({extended: false}))
app.use(express.json())
//static -> express application에서 정적 자산 제공 ; 이미지 파일 삽입이나 동영상 파일 같은 정적 파일 제공 가능
app.use(express.static('public'));
