const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "plase enetr name"],
        maxLength:[30, "dont exceed "],
        minLength:[4,"full name should be there"]
    },
    email:{
        type:String, 
        required:[true, "plase enetr email"],
        unique:true,
        validate:[validator.isEmail, "enter valid email"]
    },
    password:{
        type:String, 
        required:[true, "plase enetr pass"],
        minLength:[8,"full name should be there"],
        select:false
        
    },
    bookmarked:[{
        type:mongoose.Types.ObjectId,ref:"Bookmark", required:true
    }],
    resetPasswordToken:String,
    resetPasswordExpire:Date
});

userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        next();
    }

    //our pass word will be hased by this
    // if we want to update any data we need not to update the password
    // because bcrypt will again hash the already hashed password
    // so it will spoil
    this.password = await bcrypt.hash(this.password,10);
    

});

//jwt token 

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    });
}
//compare pass
userSchema.methods.comparePassword = async function(enteredPass){
    return await bcrypt.compare(enteredPass, this.password);
}

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};


module.exports = mongoose.model("User", userSchema);