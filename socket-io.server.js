module.exports = server => {
    const io = require('socket.io')(server);

    io
        .of('/chat')
        .on('connection', chat => {
            chat.on('message', (message, clientName) => (
                console.log('Message from client: ', message, '\nReplying...'),
                chat.emit('message', `Hi, ${clientName || 'Client'}.`)
            ));
        });
};