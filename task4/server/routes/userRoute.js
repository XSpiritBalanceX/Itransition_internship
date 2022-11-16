const {Router}=require('express');
const userRouter=new Router();
const User=require('../descriprionDB');

userRouter.get('/', async (req, res)=>{
    try{ 
        const users=await User.findAll();
        return res.json(users);
    }catch(e){
        return res.status(500).json({message:'Something went wrong, please try again'});
    }
})

module.exports=userRouter;