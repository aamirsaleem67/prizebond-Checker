var cheerio = require('cheerio');
var fs = require("fs");
var textFiles = require('./requestTextFiles');
var linksObjectNames=[
     "rs40000",
    "rs25000",
    "rs15000",
    "rs7500",
    "rs1500",
    "rs750",
    "rs200",
    "rs100"
];
var linksObject = {
    rs40000: [],
    rs25000: [],
    rs15000: [],
    rs7500: [],
    rs1500: [],
    rs750: [],
    rs200: [],
    rs100: []
};

// var arr = [];

// $('td a ').each(function () {
//     var link = $(this).attr('href');
//     arr.push(link);
//     console.log(link);

// });
// console.log(arr.length);

function extractTextFilesLinks(bondArray) {
    for (var i = 0; i < bondArray.length; i++) {
        var $ = cheerio.load(fs.readFileSync('./htmlTableFiles/'+bondArray[i]));
        $('td a ').each(function () {
            var link = $(this).attr('href');
            var name =fileName(bondArray[i]);
            linksObject[name].push(link);
            

        });
    }
    // console.log(linksObject["rs200"].length);
    textFiles.synchAPICalls(linksObject,linksObjectNames);

}

function fileName(path) {
    var arr = path.split(".");
    return arr[0].toString();

}
// console.log(linksObject);
exports.extractTextFilesLinks=extractTextFilesLinks;

