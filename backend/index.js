const http = require("http");

const app = http.createServer((req, res) => {
  // the event handler runs every time a req is made
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

const PORT = 3001;
// binds server to listen to port 3001 for requests
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
