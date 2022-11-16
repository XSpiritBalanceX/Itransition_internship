const {Router}=require('express');
const authRouter=new Router();
const User=require('../descriprionDB');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const generateJwt=(id, email)=>{
  return jwt.sign({id,email}, process.env.SECRET_KEY, {expiresIn:'24h'});
}

authRouter.post('/registration', async (req, res)=>{
    try{
        const {name, email, password}= req.body;
        if(!name || !email || !password){
            return res.status(404).json({message:'All data not filled'});
        }

        const candidate=await User.findOne({where:{email}});
        if(candidate){
           return res.status(400).json({message:'This user already exists'});
        }
        const hashPassword= await bcrypt.hash(password, 5);
        const user=await User.create({name, email, hashPassword});
        const token=generateJwt(user.id,user.email);
        return res.json({token});
    }catch(e){
        return res.status(500).json({message:'Something went wrong, please try again'});
    }
})

authRouter.post('/login', async(req, res)=>{
    try{ 
        const email=req.query.email;
        const password=req.query.password
        const user=await User.findOne({where:{email}})
        if(!user){
            return res.status(404).json({message:'User is not found'});
        }
        let comparePassword=bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return res.status(404).json({message:'Wrong password entered'});
        }
        const token=generateJwt(user.id,user.email)
        return res.json({token})
    }catch(e){
        return res.status(500).json({message:'Something went wrong, please try again'});
    }
});

authRouter.get('/auth', (req, res)=>{
   try{ 
        const {id}=req.query;
        if(!id){
            return res.status(404).json({message:'User ID not set'});
        }
        res.json(req.query.data_reg)
    }catch(e){
        return res.status(500).json({message:'Something went wrong, please try again'});
    }
})

module.exports=authRouter;