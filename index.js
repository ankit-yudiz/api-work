const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { 
        id : 1,
        course : 'Java'
    },
    { 
        id : 2,
        course : 'Android'
    },
    { 
        id : 3,
        course : 'Solidity'
    }
];
app.get('/', (req, res) => {
    res.send("Hello World");
    console.log("Hello World");
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5]);
    console.log("Array Uploaded");
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
    console.log(`Value : ${req.params.id}`);
});

app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params);
    console.log(`Request params : ${req.params}`);
});

app.get('/api/mycourses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){  // 404 not found
        res.status(404).send('No course found with this Id');
    }
    else{
        res.send(course);
    }
});

app.post('/api/login', (req, res) => {
     if(req.body.email == "ankit@example.com" && req.body.password == "turbo12345"){
         res.status(200).send("Login Successfull...");
         console.log("Login Successfull...");
     }
     else{
         res.status(403).send("Invalid Login...!");
     }
});

app.listen(3000, () => {
    console.log("Listening on port...");
});