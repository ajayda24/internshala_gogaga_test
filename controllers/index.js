const mongoose = require('mongoose')

const Details = require('../models/detail')

const mongoCollectionId = '600ee450ff318ed7396c1c52'

exports.getIndex = (req, res, next) => {
  Details.findOne({ _id: mongoCollectionId }, function (err, data) {
    res.render('home', {
      pageTitle: 'Home Page',
      path: '/index',
      lists: data.details,
    })
  })
}

exports.postIndex = (req, res, next) => {
  const name = req.body.name
  const location = req.body.location

  const newData = {
    name: name,
    location: location,
  }
  Details.findOne({ _id: mongoCollectionId })
    .then((data) => {
      data.details.push(newData)
      return data.save()
    })
    .then((data) => {
      res.redirect('/')
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
    
}

exports.postDeleteData = (req, res, next) => {
  const dataId = req.body.listId
  
  Details.findByIdAndUpdate('600ee450ff318ed7396c1c52', {
    $pull: { details: { _id: dataId } },
  })
    .then((data) => {
      
      res.redirect('/')
    })
    .catch((err) => {
      const error = new Error(err)
      error.httpStatusCode = 500
      return next(error)
    })
}