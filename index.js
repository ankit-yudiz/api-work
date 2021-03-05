const express = require('express');
const app = express();

app.use(express.json());

/**
 * @dev Creating Array of objects
 * for students 
 */
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

/**
 * @dev Get method for send 
 * response of Hello World
 */
app.get('/', (req, res) => {
    res.send("Hello World");
    console.log("Hello World");
});

/**
 * @dev Get method to send the 
 * array of no. to the client
 */
app.get('/api/courses', (req, res) => {
    res.send([1,2,3,4,5]);
    console.log("Array Uploaded");
});

/**
 * @dev Get method to send the
 * the Id which client have written
 * at the end of the URL
 */
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
    console.log(`Value : ${req.params.id}`);
});

/**
 * @dev Get method to send the the 
 * month and year in the JSON formate 
 * to the client
 */
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params);
    console.log(`Request params : ${req.params}`);
});

/**
 * @dev Get method to send the course 
 * of the specified index from the courses
 * array.
 */
app.get('/api/mycourses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){  // 404 not found
        res.status(404).send('No course found with this Id');
    }
    else{
        res.send(course);
    }
});

/**
 * @dev Post method for validating the 
 * email and password which the client 
 * have requested and server is sending 
 * the valid response
 */
app.post('/api/login', (req, res) => {
     if(req.body.email == "ankit@example.com" && req.body.password == "turbo12345"){
         res.status(200).send("Login Successfull...");
         console.log("Login Successfull...");
     }
     else{
         res.status(403).send("Invalid Login...!");
     }
});

/**
 * @dev This will let us know 
 * weather the PORT is running
 * or not by simply priting the 
 * message.
 */
app.listen(3000, () => {
    console.log("Listening on port...");
});