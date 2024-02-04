const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
        id: {
            type:Number,
            require:true,
            unique:true
        },
        title:{
            type:String,
            required: true
        } ,
        price:{
            type: Number,
            required: true
        },
        description:{
            type: String,
            require:true
        },
        category: {
            type: String,
            require:true
        },
        image: {
            type: String,
            require:true
        },
        rating: {
            rate:{
                type:Number,
                require:true
            },
            count: {
                type:Number,
                require:true
            } 
        }
    
})

const products = mongoose.model('products',productSchema)

module.exports = products   