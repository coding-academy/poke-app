var express = require('express');
var app = express();

const port = 5555;
const server = app.listen(port, () => console.log(`server on ${port}`));
var io = require('socket.io').listen(server);

var getRoom = require('./room-service');

app.use(express.static('front'));

io.on('connection', socket => {
	console.log('coooonect');
	var userRoom;
	var user;
	socket.on('roomRequested', connectedUser => {
		user = connectedUser;
		userRoom = getRoom(user)
		socket.join(userRoom.id);
		// io.to - send to everyone in the room (include the sender)
		io.to(userRoom.id).emit('userConnected', user);
	});

	socket.on('poke', payload => {
		// socket.to - send to everyone in the room except the sender
		socket.to(userRoom.id).emit('poke-recived', payload);
	});
});
