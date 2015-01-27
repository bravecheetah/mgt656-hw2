var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am a complete ninja now.');
});

app.get('/netid', function(request, response){
    response.send('mel63');
});

app.get('/nickname', function(request, response){
    response.send('brave-cheetah');
});

app.listen(process.env.PORT || 4000);