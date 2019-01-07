module.exports = server => {
    const io = require('socket.io')(server);

    io
        .of('/chat')
        .on('connection', chat => {
            chat.on('message', message => console.log('Message from client: ', message));

            chat.emit('message', 'Hi, Client.');
        });
};