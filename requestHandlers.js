var bond = require('./bond');

function start() {
    // console.log("Request handler 'start' was called.");
  return "Hello start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";

}

function search(mypath){
    var arr = mypath.split("=");
    console.log("array "+arr);
    var obj = bond.obj;
    for(i=0; i < obj.second.length;i++)
    {
        if(obj.second[i]==arr[1])
        {
            return "2512151";
        }
        else{
            return "successs";
        }
    }

}

exports.start = start;
exports.upload = upload;
exports.search= search;
