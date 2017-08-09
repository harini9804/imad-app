var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var articles = {

'article-One':{title: 'Article One | Harini R',
    date: `August 6, 2017`,
    heading:`Article One`,
    
    
content:`<p>Here goes my content! Check this page sooHere goes my content! Check this page soon!Here goes my content! Check this page soon!Here goes my content! Check this page soon!n!Here goes my content! Check this page soon!Here goes my content! Check this page soon!Here goes my content! Check this page soon!Here goes my content! Check this page soon!</p>
        <p>Here goes my content! Check this page sooHere goes my content! Check this page soon!Here goes my content! Check this page soon!Here goes my content! Check this page soon!n!Here goes my content! Check this page soon!Here goes my content! Check this page soon!Here goes my content! Check this page soon!Here goes my content! Check this page soon!</p>
        <p>Here goes my content! Check this page sooHere goes my content! Check this page soon!Here goes my content! Check this page soon!Here goes my content! Check this page soon!n!Here goes my content! Check this page soon!Here goes my content! Check this page soon!Here goes my content! Check this page soon!Here goes my content! Check this page soon!</p>`},   
'article-Two':{title: `Article Two | Harini R`,
    date: `August 7, 2017`,
    heading:`Article Two`,
    content:`<p>Here goes my content! Check this second article soon! </p>`},
'article-Three':{title: `Article Three | Harini R`,
    date: `August 7, 2017`,
    heading:`Article Three`,
    content:`<p>Here goes my content! Check this third article soon! </p>`}
    
};

function createTemplate(data)
{ var title=data.title;
var heading = data.heading;
var content = data.content;
var date= data.date;
var htmlTemplate=
   `<html>
<head>
    <title>${title}</title>
<link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
    <div class="container">
    <div>
    <a href="/">Home</a>
    </div>
    <hr/>
    <h3>${heading}</h3>
    <div>${date}</div>
    <div>
        ${content}
    </div>
    </div>
</body>
</html>`;
return htmlTemplate;

    
}



app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});
app.get('/article-three', function (req, res) {
 res.send(createTemplate(articleThree));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
