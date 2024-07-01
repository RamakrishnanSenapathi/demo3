const { sequelize,cost1 } =require('../model')

 class Service{
    async login2(email,password){
        await sequelize.sync();
        const result= cost1.findOne(
            {where:{
                Email:email,
                Pwd:password
            }}
          
        )
        return result

    }
}
module.exports={Service}