module.exports = () => {
    const io = require('socket.io-client');

    const chat1 = io.connect('http://localhost:4000/chat');
    const chat2 = io.connect('http://localhost:4000/chat');

    chat1.on('connect', () => {
        chat1.on('message', message => console.log('Message from server: ', message));

        chat1.emit('message', 'Hello, Server. From Client 1', 'Client 1');
    });

    chat2.on('connect', () => {
        chat2.on('message', message => console.log('Message from server: ', message));

        chat2.emit('message', 'Hello, Server. From Client 2', 'Client 2');
    });
};