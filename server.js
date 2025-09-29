 const http = require('http');
const fs = require('node:fs/promises');
const path = require('path');

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  const filePath = path.join(__dirname, 'public', 'index.html');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  } catch (err) {
    console.error("Error reading file:", err);
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end("<h1>Server error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`  Server running at http://localhost:${PORT}`);
});
