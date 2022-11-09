const { request, response } = require("express");
const User=require("../model/User");

exports.userSignup=(request,response)=>{
    User.create({
        name:request.body.name,
        email:request.body.email,
        password:request.body.password
    })
    .then((result)=>{
        response.render("./Login.ejs")
    })
    .catch((err)=>{
        response.send(err);
    });
};

exports.userSignin=(request,response)=>{
    User.findOne({email:request.body.email,password:request.body.password})
    .then((result)=>{
        request.session.user_identity = result._id;
        response.render("./chat.ejs",{userLogin:result.name});
    })
    .catch((err)=>{
        response.send(err);
    });
};