const dotenv=require("dotenv");
dotenv.config();

module.exports={
    db_name:process.env.db_name,
    db_user:process.env.db_user,
    db_password:process.env.db_password
}