const app = require('../src/app')
const http = require('http');
const debug = require('debug');

const port = normalizePort(process.env.PORT || '3333');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error' , onError);
server.on('listening' , onListening);



function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

//possibles erros in port

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe' + port :
        'Port' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'require elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is alread in use')
            process.exit(1)
            break
        default:
            throw error;

    }

}

//possibles erros, that come have, durin execution
function onListening(){
    const addr = server.address();
    const bind = typeof addr ==='string'
        ? 'pipe' + addr
        : 'port' + addr.port
    debug('Listening on' + bind);
}