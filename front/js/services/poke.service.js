
var socket = io();
import utils from './util.service.js';
import storgeService from './storage.service.js';


const pokes = []
var user = getUser()

function init() {

	socket.emit('roomRequested', user);

	socket.on('userConnected', user => {
		console.log('user conncted in front', { newUser: user });
	});

	socket.on('poke-recived', poke => {
		pokes.push(poke);
	});
}

function getUser() {
	user = {
		id: prompt('Your nickname')
	};
	return user;
}

function sendPoke(poke) {
	socket.emit('poke', { user, msg: poke })
}


export default {
	user,
	pokes,
	init,
	sendPoke
};
