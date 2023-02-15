const mongoose=require('mongoose');
const User=require('./usermodel')

const db={}
db.mongoose=mongoose;
db.user=User;

module.exports=db;