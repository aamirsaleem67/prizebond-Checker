var rs40000 = require('./Rs40000.js');
var rs25000 = require('./Rs25000.js');
var rs15000 = require('./Rs15000.js');
var rs7500 = require('./Rs7500.js');
var rs1500 = require('./Rs1500.js');
var rs750 = require('./Rs750.js');
var rs200 = require('./Rs200.js');
var rs100 = require('./Rs100.js');

function searchobject(path){
  if(path.draw==undefined){
      return null;
  }
  if(path.draw == '40000' ){
      return rs40000.obj;
  }
  else if(path.draw == '25000'){
      return rs25000.obj;
  }
 else if(path.draw == '15000'){
      return rs15000.obj;
  }
   else if(path.draw == '7500'){
      return rs7500.obj;
  }
   else if(path.draw == '1500'){
      return rs1500.obj;
  }
   else if(path.draw == '750'){
      return rs750.obj;
  }
   else if(path.draw == '200'){
      return rs200.obj;
  }
   else if(path.draw == '100'){
      return rs100.obj;
  }
  return null; 
}

exports.searchobject=searchobject;