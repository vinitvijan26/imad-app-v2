var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: 'Article-One | Vinit Vijan',
    heading: 'Article-One',
    date: '1st March 2017',
    content: `  <p>
                    Content 1
                </p>
                <p>
                    Content 1
                </p>
                <p>
                    Content 1
                </p>`
},
    'article-two' : {
    title: 'Article-Two | Vinit Vijan',
    heading: 'Article-Two',
    date: '2nd March 2017',
    content: `  <p>
                    Content 2
                </p>
                <p>
                    Content 2
                </p>
                <p>
                    Content 2
                </p>`
},
    'article-three' : {
    title: 'Article-Three | Vinit Vijan',
    heading: 'Article-Three',
    date: '3rd March 2017',
    content: `  <p>
                    Content 3
                </p>
                <p>
                    Content 3
                </p>
                <p>
                    Content 3
                </p>`
}
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `<!DOCTYPE html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter = 0;
app.get('/counter',function(req,res){
   counter = counter + 1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name',function(req,res){       //'/submit-name?name=xxxxx'
        var name = req.query.name;
    //var name = req.params.name;     //done when the link is '/submit-name/:name'
    names.push(name);
    //convert array into string using JSON - JavaScript Object Notation
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/me.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
