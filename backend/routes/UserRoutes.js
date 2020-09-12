const express=require('express');
import User from '../model/userModel';
import { getToken } from '../util';

const router=express.Router();

router.post('/register',async (req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    const newUser=await user.save();
   
        if(newUser){
            res.send({
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                isAdmin:newUser.isAdmin,
                token:getToken(newUser)
            })
            
        }
        else{
            res.status(401).send({msg:'Invalid Userdata'})
        }
        
   
    
})


router.post('/signin',async (req,res)=>{

    try {
        const signinUser=await User.findOne({
            email:req.body.email,
            password:req.body.password
        });
        if(signinUser){
            res.send({
                _id:signinUser._id,
                name:signinUser.name,
                email:signinUser.email,
                isAdmin:signinUser.isAdmin,
                token:getToken(signinUser)
            })
            
        }
        else{
            res.status(401).send({msg:'Invalid Email or Password '})
        }
        
    } catch (error) {
        res.send({msg:error.message})
        
    }
    
})




router.get("/createadmin",async (req,res)=>{
    try {
        const user=new User({
            name:'rakesh',
            email:'rakesh1@gmail.com',
            password:'1111',
            isAdmin:true
    
        })
        const newUser=await user.save();
        res.send(newUser)
        
    } catch (error) {
        res.send({msg:error.message})
        
    }
    

})
export default router;