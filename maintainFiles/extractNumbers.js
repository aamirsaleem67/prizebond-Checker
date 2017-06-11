var patt = /(\s+)/;
const readline = require('readline');
const fs = require('fs');

var loop=1;
var name;
var jsonFiles =["rs40000","rs25000","rs15000",
                 "rs7500","rs1500","rs750",
                 "rs200","rs100"];



function createJsonFiles(){
var fileName= jsonFiles.pop();
var obj = require('../jsonFiles/'+fileName+'JSON.json');
const rl = readline.createInterface({
    input: fs.createReadStream('./textFiles/'+fileName+'text.html')
});

rl.on('line', function (line) {
           if(line.indexOf('First')>=0){
               name="first";
           }
           else if (line.indexOf('Second') >= 0) {
               name = "second";
           }
           else if (line.indexOf('Third') >= 0) {
               name = "third";
           }
           
    if (!(/[a-z]/i.test(line)) || line.slice(-1) === 'X') {
        if (line.slice(-1) === 'X') {
            // console.log(line);
            // arr.push(line);
            var array = line.trim().split(/\s+/);
                 array.forEach(function (entry) {
                     obj.third.push(entry);
                     
                 });
            //jsonObj.third.push(line.trim().split(/\s+/));

        }
        else if (line.slice(-1) % 1 === 0) {

            if (line.trim().length != 0 && name!=undefined) {
                
                 var array = line.trim().split(/\s+/);
                 array.forEach(function (entry) {
                     obj[name].push(entry);
                 });

                
            }

        }
    }

});


rl.on('close', function () {

fs.writeFileSync('./jsonFiles/' +fileName+'JSON.json', JSON.stringify(obj, null, 4), 'utf8');});
if(jsonFiles.length){
    createJsonFiles();
}
else{
    console.log("congratx");
}
// console.log("congratx");

} // end of function
// createJsonFiles();
exports.createJsonFiles=createJsonFiles;