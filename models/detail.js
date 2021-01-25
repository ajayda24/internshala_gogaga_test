const mongoose = require('mongoose')

const Schema = mongoose.Schema

const detailSchema = new Schema({
  details: [
    {
      name:{
        type: String
      },
      location:{
        type:String
      }
    }
  ]
})

module.exports = mongoose.model('Detail', detailSchema)
