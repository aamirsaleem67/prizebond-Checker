var http = require("http");
var url = require("url");
function start(route,handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var path2 =  url.parse(request.url, true).query;
        
        // console.log("Request for " + path2.draw+ " received.");
        var content=route(handle,pathname,path2);

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen( process.env.PORT ||8888);;

    console.log("Server has started.");
}

exports.start = start;