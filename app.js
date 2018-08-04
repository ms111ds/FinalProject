//init the required packages
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// init the view engine
app.engine('handlebars', exphbs({defaultLayout: 'main.handlebars.html'}));
app.set('view engine', 'hbs');

// serving the static pages
app.use(express.static('./public'));

//serving the main page
app.get('/', function(req, res, next)  {
   res.status(200);
   res.render('helloWorld.handlebars');
});

//setting the port to the env variable or 3000 as default
var port = process.env.PORT || 3000;
app.listen(port);
