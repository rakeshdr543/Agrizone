const express=require('express');
import User from '../model/userModel';

const router=express.Router();

router.get("/api/users/createadmin",async (req,res)=>{
    const user=new User({
        name:'Basir'
    })

})