//Importing the databases
const Question = require('../../../models/questions');
const Option = require('../../../models/options');


//Function for creating the options
module.exports.create = async function(req,res){
    try{
        let question = await Question.findById(req.body.question);
        if(question){
            let option = await Option.create({
                text:req.body.text,
                votes:req.body.votes,
                question:req.body.question,
            });

            question.options.push(option);
            question.save();

            return res.status(200).json({
                data:{
                    option:option,
                },
                message:"Option Published!"
            })
        }
    }catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message:"Create Option:Internal Server Error"
        });
    }
}

//Function for deleting the option
module.exports.destroy = async function(req,res){
    try{
        let option = await Option.findById(req.params.id);
        
        let questionId = option.question;
        option.remove();

        let question = await Question.findByIdAndUpdate(questionId,{$pull:{options:req.params.id}});

        return res.status(200).json({
            data:{
                option_id:req.params.id,
            },
            message:"Option Deleted!"
        });
    }catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message:"Delete Option:Internal Server Error"
        });
    }
}

//function to addition in vote Dynamically
module.exports.addVote = async function (req, res) {
    try {
        await Option.findByIdAndUpdate({ _id: req.params.id }, { $inc: { votes: 1 } });

        return res.status(200).json({
            message: 'Vote added succesfully'
        });
    } catch (err) {
        console.log('***', err);
        return res.status(500).json({
            message: "Add Vote:Internal Server Error"
        });
    }
}