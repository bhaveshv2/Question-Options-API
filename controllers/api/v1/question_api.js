//Importing the databases
const Question = require('../../../models/questions');
const Option = require('../../../models/options');

//function for reading the questions and its option.
module.exports.index = async function(req,res){
    //populating the options with questions
    let questions = await Question.findById(req.params.id)
    .populate('options');

    //converting the questions to JSON
    questions = questions.toJSON();

    //method for add vote dynamically for each option
    questions.options.forEach((option)=>{
        option.link_to_vote=`http://localhost:8000/api/v1/options/${option._id}/add_vote`
    });

    return res.status(200).json({
        message: "Question:",
        questions:questions
    });
}


//function for creating the questions
module.exports.create = async function(req,res){
    try{
        let questions = await Question.create({
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
            message:"Create Question:Internal Server Error"
        });
    }
}

//function for deleting the questions and associated options
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
            message:"Delete Question:Internal Server Error"
        });
    }
}
