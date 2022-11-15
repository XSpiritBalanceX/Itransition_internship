const {Router}=require('express');
const authRouter=new Router();
const User=require('../descriprionDB');

authRouter.post('/registration', async (req, res)=>{
    try{
        const {name, email, password}= req.body;

        const isUsed=await User;
    }catch(e){
        console.log(e);
    }
})

authRouter.post('/login', );
authRouter.get('/auth')

module.exports=authRouter;