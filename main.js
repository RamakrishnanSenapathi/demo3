const exp=require('express');
const { sequelize } = require('./model');
const {Service}=require('./Service/service')

const app=exp();

app.use(exp.json());

const ser=new Service();

app.post('/login',async(req,res)=>{
    await sequelize.sync();
    var body=req['body'];
    var email=body.Email;
    var password=body.Password;
    try{
        var result=await ser.login2(email,password);
        if(result=== null){
            res.json("no")
        }
        else{
            res.json("sucessfull")
        }

    }
    catch(e){
        res.json({"error":"not"});
    }
    
    
})

app.listen(3000,()=>{
    console.log("server is runing");
})