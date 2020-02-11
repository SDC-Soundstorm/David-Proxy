const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 9999;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'lib')));

app.get('/initial', (req, res) => {
    axios.get('http://13.56.50.57:3000/initial')
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
        res.send(error);
    });
});

app.get('/api/comments', (req, res) => {
    axios.get('http://18.225.11.24:3001/api/comments')
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
        res.send(error);
    })
});

app.get('/songs', (req, res) => {
    axios.get('http://13.56.213.9:8000/songs')
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
        res.send(error);
    })
});

app.get('/song', (req, res) => {
    axios.get('http://44.228.254.149:9000/song')
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
        res.send(error);
    });
});

app.get('/4e6f865c81aa54f9e778e35e7ac3ed73.mp3', (req, res) => {
    axios.get('http://44.228.254.149:9000/4e6f865c81aa54f9e778e35e7ac3ed73.mp3')
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
        res.send(error);
    });
});

app.get('/buttons/exit.svg', (req, res) => {
    axios.get('http://13.56.50.57:3000/buttons/exit.svg')
      .then(response => {
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      });
});

app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
});