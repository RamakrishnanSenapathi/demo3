var Sequelize=require("sequelize")
const {DataTypes}=require("sequelize")
const {db_name,db_user,db_password}=require("./config")

const sequelize=new Sequelize(
    db_name,db_user,db_password,
    {
        host:'3.7.198.191',
        port:'8993',
        dialect:'mysql'
      }
);

async function conTest(){
    try{
let con=await sequelize.authenticate();
console.log('Connection has been established successfully.');
}
catch(e){
console.log('connection error 11',e)
}
}

conTest();
const cost1 = sequelize.define("Bank_Customers", {
    Customer_Name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Account_Number:{
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false
    },
    IFSC_Code:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Phone_Number:{
        type: DataTypes.BIGINT,
        unique: true,
        allowNull: false
    },
    Email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    Balance:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Account_Type:{
        type: DataTypes.ENUM('Current','Savings'),
        allowNull: false
    },
    Pwd:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Status:{
        type: DataTypes.ENUM('YES','NO'),
        allowNull: false
    },
    Attempts:{
        type: DataTypes.TINYINT,
        allowNull: true
    }

});

 module.exports={sequelize,cost1}