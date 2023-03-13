const server=require("../../app");
const io=require("socket.io")(server,{
    pingTimeout:60000,
    cors:{
        origin:"http://localhost:3000"
    }
});
io.on('connection',(socket)=>{
    socket.on('setup',(userData)=>{
        socket.join(userData.userid);
        socket.emit("connected!");

    });
    socket.on("join chat",(room)=>{
        socket.join(room);
    });
    socket.on("new message",(newMessageReceived)=>{
        let chat=newMessageReceived.chat;    
    });
});
