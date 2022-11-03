import express from 'express';
import cors from 'cors';

const users = [];
const tweets = [];

const app = express();
app.use(cors());
//app.use(body-parser);

app.get('/', (req, res) => res.send('Hello Server'));

//app.post('/sign-up', (req, res) => console.log(req.body) )

app.get('/tweets', (req, res) => res.send(tweets.slice(10)));

app.listen(5000) 