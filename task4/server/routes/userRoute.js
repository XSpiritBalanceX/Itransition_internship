const {Router}=require('express');
const userRouter=new Router();
const {User}=require('../descriprionDB');
const userController=require('../controllers/userController');

userRouter.get('/', userController.getTable);

userRouter.delete('/delete/:id', userController.deleteUser)

module.exports=userRouter;