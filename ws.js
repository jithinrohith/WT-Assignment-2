var server = require('ws').Server;
var s = new server({port : 5002});
var name;

s.on('connection',function(ws){
    
    ws.on('message',function(message){
       message = JSON.parse(message);
           console.log("message recieved.");
           console.log(message.type);
           console.log(message.data);
        s.clients.forEach(function e(client) {
        
            client.send(JSON.stringify({
                name: message.type,
                data: message.data 
            })); 
        
        });

    });
    console.log("one more client connected");
    ws.on('close',function(){
        console.log("i lost it")
    });
});