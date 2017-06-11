

var fs = require("fs");

var http = require('http');
var extractNumbers = require('./parsing');
var loop = 0;

var fileNames = [];
function getData(element, options) {
    var response = "";

    var req = http.get(element, function (res) {

        res.on("data", function (chunk) {

            response += chunk;
        });
        res.on("end", function (err) {
            var fn = fileName(element.path);
            var write1 = fs.createWriteStream("./htmlTableFiles/rs"+fn+ ".html");
            fileNames.push("rs"+fn + ".html");
            write1.write(response);
            write1.close();
            write1.on("close", function () {

                loop++;
                if (loop == options.length) {
                    //  console.log(fileNames);
                   extractNumbers.extractTextFilesLinks(fileNames);
                } else {

                    getData(options[loop], options);
                }

            });





        });

    });

}
function fileName (path){
var arr = path.split("-");
return arr[1].toString();

}

exports.getData = getData;
exports.fileNames = fileNames;