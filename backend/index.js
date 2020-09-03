const express = require("express");
const app = express();

// this middleware parses json to a jsobject, then
// attaches to body property of request
app.use(express.json());

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => {
    // console.log(note.id, typeof note.id, id, typeof id, note.id === id);
    return note.id === id;
  });
  if (note) {
    res.json(note);
  } else {
    //don't update ui since REST APIs are for programmatic use.
    res.status(404).end();
  }
});

app.post("/api/notes", (req, res) => {
  const note = req.body;
  console.log(note);

  res.json(note);
});

app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id === id);

  res.status(204).end();
});

const PORT = 3001;
// binds server to listen to port 3001 for requests
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
