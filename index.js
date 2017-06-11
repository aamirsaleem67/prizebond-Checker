var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var mymain = require('./maintainFiles/mymain.js');
var cron = require('node-cron');
var handle = {};

handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
handle["/search"]=requestHandlers.search;



server.start(router.route,handle);

cron.schedule('30 45 6 */5 * *', function(){
    mymain.reqgetData();
});