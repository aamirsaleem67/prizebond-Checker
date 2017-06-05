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
    
    var obj = bond.obj;
    for(i=0; i < obj.second.length;i++)
    {
        if(obj.second[i]==mypath.num)
        {
            return "you have won second prize of"+
            mypath.draw;
        }
        else{
            return "successs";
        }
    }

    return "search karaya";

}

exports.start = start;
exports.upload = upload;
exports.search= search;
