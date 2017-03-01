var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'articleOne' : {
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
    'articleTwo' : {
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
    'articleThree' : {
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


app.get('/articleName',function(req, res){
    var articleName = req.param.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
