var req = require("./webrequest");

var options = [

{
    hostname: "savings.gov.pk",
    port: 80,
    path: "/rs-40000-draws/",
    method: "GET"
},
{
    hostname: "savings.gov.pk",
    port: 80,
    path: "/rs-25000-draws/",
    method: "GET"
},
{
    hostname: "savings.gov.pk",
    port: 80,
    path: "/rs-15000-draws/",
    method: "GET"
},
{
    hostname: "savings.gov.pk",
    port: 80,
    path: "/rs-7500-draws/",
    method: "GET"
},
{
    hostname: "savings.gov.pk",
    port: 80,
    path: "/rs-1500-draws/",
    method: "GET"
},
{
    hostname: "savings.gov.pk",
    port: 80,
    path: "/rs-750-draws/",
    method: "GET"
},
{
    hostname: "savings.gov.pk",
    port: 80,
    path: "/rs-200-draws/",
    method: "GET"
},
{
    hostname: "savings.gov.pk",
    port: 80,
    path: "/rs-100-draws/",
    method: "GET"
}

];
function reqgetData(){

req.getData(options[0],options);


}

exports.reqgetData=reqgetData;
