const {User}=require('../descriprionDB');

class UserController{

    async getTable(req, res, next){
        try{ 
            let users=await User.findAll();
            return res.json(users);
        }catch(e){
            return res.status(500).json({message:'Something went wrong, please try again'});
        }
    }

    async deleteUser (req, res){
         try{ 
            const id=parseInt(req.params.id);
            let userDelete=await User.destroy({where:{id}});  
            if(userDelete){
               return res.json({message:`User ${id} was deleted`}); 
            }  
            else{
                return res.json({message:`User ${id} doesn't exist`});
            }     
            
        }catch(e){
            return res.status(500).json({message:'Something went wrong, please try again'});
        } 
    }
}

module.exports=new UserController();