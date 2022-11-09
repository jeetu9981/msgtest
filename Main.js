const express = require('express')
const app = express()
const http = require('http').createServer(app)
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const session=require("express-session");

app.use(session({
    secret: 'jeet'
  }))

const PORT = process.env.PORT || 4000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'))


const userRouter=require("./router/UserRouer");

mongoose.connect("mongodb+srv://jitu:jitu%40123@cluster0.5msi4.mongodb.net/msgtest?retryWrites=true&w=majority")
.then(()=>{
    app.use("/user",userRouter);
    app.use("/login",(req, res) => {
        res.render("./Login.ejs")
    });
    app.use("/chat",(req, res) => {
        if(req.session.user_identity)
            res.render("./chat.ejs");
        else
            res.send("Login First");
    });
    app.use("/",(req, res) => {
        res.render("./Register.ejs")
    });
    
})
.catch((err)=>{

});

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})