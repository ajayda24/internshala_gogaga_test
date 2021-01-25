const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const mongoose = require('mongoose')

const app = express()

//Models
const indexModel = require('./models/detail')

//Controllers
const indexController = require('./controllers/index')
const errorController = require('./controllers/error')

//Routes
const indexRoutes = require('./routes/index')


// Views
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb://localhost:27017/internshalaGogagaSkill', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.use('/', indexRoutes)

app.get('/500', errorController.get500)

app.use(errorController.get404)

// app.use((error, req, res, next) => {
//   // res.status(error.httpStatusCode).render(...);
//   // res.redirect('/500');
//   res.status(500).render('500', {
//     pageTitle: 'Error!',
//     path: '/500'
//   })
// })

let port = process.env.PORT
if (port == null || port == '') {
  port = 3000
}


app.listen(port, function () {
  console.log(`Server started on port ${port}`)
})
