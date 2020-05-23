import express from 'express';
import http from 'http';
import path from 'path';
import url from 'url';
import compression from 'compression';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8000;

let app = express();
let server = http.Server(app);

app.use(compression());
app.use(express.static('dist'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(PORT);
