const http = require('http');
const app=require('./app')

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, console.log(`server is listening on port ${PORT}`));

//mongodb+srv://KrithikaM:<password>@expensestracker.90txobg.mongodb.net/?retryWrites=true&w=majority
//expensetracker