const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3001;
const path = require('path');

const server = http.createServer((req, res)=> {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);

    if(req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Hehe main meow meowwwwwww</h1>');
    } else if(req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About meow meowwwwwww</h1>');
    } else if(req.url == '/home') {
        res.statusCode = 200;
        const filePath = path.join(__dirname, 'Home.html');
        console.log(`File path: ${filePath}`);  // Log the file path

        try {
            const data = fs.readFileSync(filePath);
            res.end(data.toString());
        } catch (err) {
            console.error('Error reading Home.html:', err);
            res.statusCode = 500;
            res.end('<h1>Internal Server Error</h1>');
        }
    } else {
        res.statusCode = 404;
        res.end('<h1>Oppsiee wrong url</h1>');
    }
});

server.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`);
});
