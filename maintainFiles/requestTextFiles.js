var http = require('http');
var fs = require('fs');
var extract = require('./extractNumbers');

var loop=0;
var results = [];
function synchAPICalls (urlsObject,names) {
    if(!isEmpty(urlsObject)){
        var urls = urlsObject[names[loop]];
        var write1 = fs.createWriteStream('./textFiles/'+names[loop]+"text"+ ".html");
        innerCalls(urls);
    }else{
         extract.createJsonFiles();
    }

    
     function innerCalls(urls){
  var url = urls.pop();
  http.get(url,function(res){
      var chunks = '';
    res.on('data',function(d){
    chunks += d;
   
    });
    res.on('end',function(){
    //   results.push(chunks);
       write1.write(chunks);
      if(urls.length){
        innerCalls(urls);
      } else {
        //return results;

        write1.close();
        delete urlsObject[names[loop]];
        loop++;
        console.log(loop+"  dafaa");
        synchAPICalls(urlsObject,names);
      }
    })
  });
}// end of innerCalls
}
// synchAPICalls(URLs);

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
exports.synchAPICalls=synchAPICalls;