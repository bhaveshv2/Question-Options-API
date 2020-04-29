const mongoose=require('mongoose');

//Question Schema
const questionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    //Array of option ids store in question schema
    options:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Option'
        }
    ]
},{
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;