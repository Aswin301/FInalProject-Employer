const Mongoose=require("mongoose")
//model for schema
const jobSchema=new Mongoose.Schema(
    {
        company:{
            type:String,
            required:true},
        role:{
                type:String,
                required:true},
        experience: Number,
        salary:Number,
        technology:{
            type:String,
            required:true},
        othercriteria:String
    }
)
//model for jobpost
const jobModel=Mongoose.model(
    "Job Vacancy",jobSchema
);
module.exports={jobModel}