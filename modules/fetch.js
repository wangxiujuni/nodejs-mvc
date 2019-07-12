var fetch = require('node-fetch');

module.exports = function (url,options,callback){
    options.timeout = 5000;
    fetch(url,options)
        .then(function(res){
            return res.json();
        })
        .then(function(res){
            callback(null,res);
        })
        .catch(function(err){
            callback(err);
        });
}