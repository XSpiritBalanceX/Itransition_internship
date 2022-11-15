const {Router}=require('express');
const userRouter=new Router();
const User=require('../descriprionDB');

userRouter.get('/users')

module.exports=userRouter;