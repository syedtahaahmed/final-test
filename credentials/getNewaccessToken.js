const generateRefreshtoken = require("./generateNewaccessToken");
/*
var deasync = require('deasync');
function SyncFunction(){
    console.log("insyncfun")
    var executed=false
    if(!executed)
    {
    var ret;
    generateRefreshtoken(function(tok){
        //console.log(token)
        ret=tok

    });
    while(ret === undefined) {
      require('deasync').sleep(100);
    }
    executed=true
}
    // returns hello with sleep; undefined without
    return ret;    
  }
  var token;

  var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
             token=SyncFunction();
            //console.log(a)
            // do something
        }
    };
})();


something();
something();
console.log(token)
*/
var deasync = require('deasync');
function SyncFunction(){
    var ret;
    generateRefreshtoken(function(v){
        //console.log(token)
        ret=v

    });
    while(ret === undefined) {
      require('deasync').sleep(100);
    }
    // returns hello with sleep; undefined without
    return ret;    
  }

  module.exports=SyncFunction;
