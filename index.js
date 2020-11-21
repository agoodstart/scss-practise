var express = require('express')
var serveStatic = require('serve-static')
const port = 3000;

var app = express()

app.use(serveStatic('static', { 'index': ['index.html', 'index.htm'] }))
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})