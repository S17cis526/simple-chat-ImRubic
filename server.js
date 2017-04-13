const PORT = 3100;

var fs = require('fs');
var http = require('http');
var server = new http.Server(handleRequest);
var io = require('socket.io')(server);

var connected = 0;

io.on('connection', function(socket){
	var name = 'User ' + connedd;
	var color = 'gray';
	conntected++;
	
	socket.emit('message', function(text) {
	  io.emit('message', {
		user: name,
		text: text,
		color: color
	  });
	});
	
	socket.on('color', function(newColor) {
		color = mewColor;
	});
	
	socket.emit('welcome', "Welcome " + name + "!");
});

io.on('message', function(socket) {
	io.emit('message', text);
});

function handleRequest(req, res) {
  switch(req.url) {
    case '/':
    case '/index.html':
      fs.readFile('public/index.html', function(err, data){
        if(err){
        }
		res.setHeader("Content-Type", "text/html");
        res.end(data);
      });
      break;
    case '/simple-chat.css':
      fs.readFile('public/simple-chat', function(err, data){
        if(err){
          res.setHeader("Content-Type", "text/css");
          res.end(data);
        }
		res.setHeader("Content-Type", "text/css");
        res.end(data);
      });
      break;
    case '/simple-chat.js':
      fs.readFile('public/simple-chat.js', function(err, data){
        if(err){
          res.setHeader("Content-Type", "text/js");
          res.end(data);
        }
		res.setHeader("Content-Type", "text/js");
        res.end(data);
      });
      break;
  }
}

server.listen(PORT, function(){
  console.log(PORT);
});
