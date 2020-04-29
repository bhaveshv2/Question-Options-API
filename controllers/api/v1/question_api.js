const Question = require('../../../models/questions');
const Option = require('../../../models/options');

module.exports.index = async function(req,res){
    let questions = await Question.findById(req.params.id)
    .populate('options');

    return res.status(200).json({
        message: "Question:",
        questions:questions
    });
}

module.exports.create = async function(req,res){
    try{
        let questions = await Question.create({
            id:req.body.id,
            title:req.body.title,
        });

        return res.status(200).json({
            data:{
                questions:questions
            },
            message:"Question Published",
        }); 
    }catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message:"Create:Internal Server Error"
        });
    }
}

module.exports.destroy = async function(req,res){
    try{
        let question = await Question.findById(req.params.id);

        question.remove();
        await Option.deleteMany({question:req.params.id});

        return res.status(200).json({
            message:'Question and associated options deleted successfully'
        });
    }catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message:"Delete:Internal Server Error"
        });
    }
}
