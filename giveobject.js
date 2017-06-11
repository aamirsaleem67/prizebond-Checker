var rs40000 = require('./jsonFiles/rs40000JSON.json');
var rs25000 = require('./jsonFiles/rs25000JSON.json');
var rs15000 = require('./jsonFiles/rs15000JSON.json');
var rs7500 = require('./jsonFiles/rs7500JSON.json');
var rs1500 = require('./jsonFiles/rs1500JSON.json');
var rs750 = require('./jsonFiles/rs750JSON.json');
var rs200 = require('./jsonFiles/rs200JSON.json');
var rs100 = require('./jsonFiles/rs100JSON.json');

function searchobject(path){
  if(path.draw==undefined){
      return null;
  }
  if(path.draw == '40000' ){
      return rs40000;
  }
  else if(path.draw == '25000'){
      return rs25000;
  }
 else if(path.draw == '15000'){
      return rs15000;
  }
   else if(path.draw == '7500'){
      return rs7500;
  }
   else if(path.draw == '1500'){
      return rs1500;
  }
   else if(path.draw == '750'){
      return rs750;
  }
   else if(path.draw == '200'){
      return rs200;
  }
   else if(path.draw == '100'){
      return rs100;
  }
  return null; 
}

exports.searchobject=searchobject;