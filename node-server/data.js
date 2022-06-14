const nano = require('nano');
const url =
  'https://apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4:163671d490ddeef138fc61e470881715@21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud'

  //username:password@endpoint
const nanodb = nano(process.env.COUCHDB_URL || url); // connect with couchdb
const agridb = nano(url); // connect to database
 const post=function(value,dbname){
     return agridb.use(dbname).insert(value);
 }
 const get = function (val, dbname) {
  return agridb.use(dbname).find(val);
}

module.exports={
    post,get
}