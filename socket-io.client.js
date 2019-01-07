module.exports = () => {
    const io = require('socket.io-client');

    const chat = io.connect('http://localhost:4000/chat');

    chat.on('connect', () => {
        chat.on('message', message => console.log('Message from Server: ', message));

        chat.emit('message', 'Hello, Server.');
    });
};