var bond = require('./giveobject');

function start() {
    // console.log("Request handler 'start' was called.");
  return "Hello start";
}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";

}
var obj;
function search(mypath){
    
     obj = bond.searchobject(mypath);
    if(obj==null || mypath.num== undefined){
        return "undefinded prize bond number or draw is undefined or incorrect";
    }
    
    
    var check = false;
    var drawName= "first";
    var loop = 0;
    var msg = {

        "prize" : "None",
         "drawNumber": mypath.num,
         "win":"no", 
         "denomination": mypath.draw
    };
     while(true){
        for(i=0; i < obj[drawName].length;i++)
    {
        if(obj[drawName][i]==mypath.num)
        {
            msg.prize = drawName;
            msg.win = "yes";
            check=true;
            break;
        }
        
    } // end of for
    loop++;
    if(loop==3 || check==true){
          break;
    }
    
    if(loop==1){
        drawName = "second";
        continue;
    }
    if(loop==2){
        drawName= "third";
    }
   
     }    // end of while   
  
            // console.log(JSON.stringify(obj));

            return JSON.stringify(msg);
        
}



exports.start = start;
exports.upload = upload;
exports.search= search;
