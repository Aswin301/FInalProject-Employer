const Mongoose=require("mongoose")
//model for schema
const loginSchema=new Mongoose.Schema(
    {
        username:{
            type:String,
            required:true},
        password:{
                type:String,
                required:true}
        
    }
)
//model for student
const loginModel=Mongoose.model(
    "login",loginSchema
);
module.exports={loginModel}