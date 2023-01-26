const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

app.set('view engine', 'ejs');

let myName = 'Lauren';


app.get('/', (req, res) => {
//   res.send('Hello World, this is november');
  res.send(`<h3> Hi, ${ myName }</h3>`);
})

app.get('/show', (req, res) => {
    // res.sendFile('index.html');
    res.sendFile('index.html' , { root : __dirname});

})

app.get('/ejs', (req, res) => {
    // ejs stuff here
    // use res.render to load up an ejs view file

        res.render('index');
    

})

console.log('in the node console');

app.listen(PORT, () => {
    console.log(`Server is running & listening on port: ${PORT}`);
  });
