const http = require('http');
const fs = require('fs/promises');  
const path = require('path');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === '/') {
      const filePath = path.join(__dirname,'public', 'index.html');
      const data = await fs.readFile(filePath, 'utf-8');

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);

    } else if (req.url === '/api/ping') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'pong' }));

    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }

  } catch (err) {
    console.error(' Error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Server Error');
  }
});

server.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
