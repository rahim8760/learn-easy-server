const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT||5000;
const courses=require('./data/courses.json');

app.use(cors());
app.get('/courses',(req, res)=>{
    res.send(courses);
});
app.get('/courses',(req, res)=>{
    res.send(courses);
});
app.get('/',(req, res)=>{
    res.send('hello form server');
});
app. listen(port, ()=>{console.log('this is learn easy server'),port})