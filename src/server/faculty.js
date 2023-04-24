const Mongoose=require("mongoose")
//model for schema
const facultySchema=new Mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true},
        lastname:{
                type:String,
                required:true},
        phn: Number,
        email:String,
        role:String
    }
)
//model for student
const facultyModel=Mongoose.model(
    "Faculty",facultySchema
);
module.exports={facultyModel}