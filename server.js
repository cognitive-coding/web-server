const middleware = require('./middleware');
const express = require('express');
const app = express();

var PORT = 3000;

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, (req, res) => {  // using route level middleware
    res.send('About Us');
});

// expose the public directory
app.use(express.static(__dirname +'/public'));

// set listening port
app.listen(3000, () => {
    console.log('\n###############################################');
    console.log('\n$$ Express Server is Running on port ' + PORT + ' $$\n');
    console.log('###############################################\n');

});