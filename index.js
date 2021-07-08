// importieren von Express
const express = require('express');
// server erstellen
const app = express();

//port feslegen
const PORT = 3300;

// statische datei verwenden
app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/Solutions', (req, res) => {
   res.sendFile('./views/Solutions.html', { root: __dirname });
});
app.get('/Community', (req, res) => {
   res.sendFile('./views/Community.html', { root: __dirname });
});

app.use((req, res) => {
   res.status(404).sendFile('./views/404.html', { root: __dirname });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
