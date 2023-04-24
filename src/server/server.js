
const Express=require("express")
const Cors=require("cors")
const Mongoose=require("mongoose")

const Bodyparser=require("body-parser")
//const {facultyModel}=require("./faculty")
const {jobModel}=require("./jobvacancy")
const {loginModel}=require("./login")
const app=Express()
//installing middlewares
app.use(Cors())
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))
//making mongodb connection
Mongoose.connect("mongodb+srv://Aswin:Add2023@cluster0.qrgymrt.mongodb.net/loginDB?retryWrites=true&w=majority",{useNewUrlParser:true})
//posting data
app.post('/login',async(req,res)=>{
   
    let username=req.body.username
    let password=req.body.password
    let user=await loginModel.findOne({username:username})
    console.log(user.password)
    console.log(password)
    if(!user){
        res.json({msg: "User not found"})  
    }
    try{
        if(user.password===password){
            res.json({msg:"login successful"})
            
            
        }else{
            res.json({msg:"login failed"})
        }}catch(error){
            res.status(400).json({
                message:"An error occured",
                error: error.message
            })
        }
    }
    
)  

//posting job psoting into db
app.post('/newjobpost',async(req,res)=>{
    let data =new jobModel(req.body)
    data.save()
    res.json({status:"Success"})
    
})

//getting job posting from db
app.get('/viewall', async(req,res)=>{
    let data=await jobModel.find()
    res.json(data)
})
//searching a record in db
/*app.post('/search', async(req,res)=>{
    let data=await facultyModel.find(req.body)
    res.json(data)
})  */

//delete job posting
app.delete('/delete', async (req,response)=>{
        let data=await jobModel.deleteOne(req.body)
        response.json(data)
})
//update job posting
app.put('/update',async (req,res)=>{
    let data=await jobModel.findOneAndUpdate({"id":req.body.id}, req.body)
    res.json(data)
})

//login
//app.post('/login',async(req))
app.listen(3000,()=>{
    console.log('Sever started')
})