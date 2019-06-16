var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.write(data); //nie odczytuje img z index.html
            response.end();
        })
    } 
    else {
            response.statusCode = 404;   
                //responce.write('<img src="./404.png">');         
                response.write('<img src="http://wpsites.net/wp-content/uploads/2014/03/redirect-404-page.png">');
                //nie chciał czytać 404.png lokalnie, gdy robiłem poprzez fs.readFile to nadpisywało 'data' i wszytsko się sypało. Pzy ścieżce /hello pokazywało index.html oraz 404.png
                response.end();            
    }
});

server.listen(8070); //dlaczego npm wypluwa, że 8080 already in use? (8080 był w poprzednim zadaniu). Zakładka zamknięta, npm był w międzyczasie zamknięty itd... w którym momencie port nie jest już używany?