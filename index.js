var AWS = require('aws-sdk');
     

exports.handler = function(event, context, callback) {  
  var bucketName = process.env.S3_BUCKET;       
  console.log("Test");
  callback(null, bucketName);     
}

