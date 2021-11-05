const generateRefreshtoken = require("./credentials/generateNewaccessToken");
var request=require('request')
var  deasync=require('./credentials/getNewaccessToken')
/*var  x;
var token;
var  firsttime = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            generateRefreshtoken(function(v){
                //console.log(token)
                token=v

            });//call only first time (elemnates if server went down)
            console.log("in  first call")
            executed = true;
            x=1;
            // do something
        }
    };
})();
firsttime(); 
console.log(token)


function myFunction() {
    var w;
    generateRefreshtoken(function(v){
        //console.log(token)
        w=v;

    });
   return w
  }
  var x1=myFunction();
  console.log(x1)



 
function interval() {
    //console.log(x)
   
    function y(x){
         return x+1
    }

    //generateRefreshtoken()//call every hour(eliminates everyhour problem)
    console.log('in 5 secs interval');
  

}

setInterval(interval, 5000); // Time in milliseconds







function rollDice(callback) {
    var i = Math.floor((Math.random() * 25) + 5);
    var j = i;
    setInterval(function() {
        i--;
        var value = Math.floor((Math.random() * 6) + 1);
        if(i < 1) {

            callback(value);
        }
    }, 500);
}
rollDice(function(x){
    console.log(x)
})


function printString(string){
    return new Promise((resolve, reject) => {
      setInterval(
        () => {
         console.log(string)
         resolve()
        }, 
       2000
      )
    })
  }



async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
  }
  printAll()

*/
//problem
/*
const gettodo=()=>{
    setTimeout(()=>{
        return ({text:"after set timeout"})
    },2000)
}
const todo=gettodo()
console.log(todo.text)
*/
//solutin with callback
/*var m;
const gettodo=(callback)=>{
    setTimeout(()=>{
        callback ({text:"after set timeout"})
    },2000)
}
gettodo(todo=>{
    
    m=todo.text
    console.log(m)
})*/
/* goood callback working good
const gettodo=(callback)=>{
        const refresh_token="1000.0624e6e3d12949b6e8c027a5541e75f8.fdc894ae8a930736f3117303327254a1"
        const client_id="1000.BMBIP0AKKQ6NLPGC1MC6CBO9KPRFZK"
        const client_secret="5c2e257dfe4c3afec448b6b1d29dab70bd63f5fca4"
             const grant_type="refresh_token"
        
        const url="https://accounts.zoho.in"+"/oauth/v2/token?refresh_token="+refresh_token+"&client_id="+client_id+"&client_secret="+client_secret+"&grant_type=refresh_token"
    
    
    request({
        method: "POST",
        url: url,
        headers: {
            "Content-Type":"application/x-www-form-urlencoded",
            
        },
    
    
        //json: true,   // <--Very important!!!
    }, function(error, response, body) {
    
        callback(( JSON.parse(body)).access_token)
        //console.log(body)
    
      
    
    
    })

}


gettodo(todo=>{
    console.log(todo)
})

*/
//working perfect able to print accessttoken syncronosly

// var deasync = require('deasync');
// function SyncFunction(){
//     var ret;
//     generateRefreshtoken(function(v){
//         //console.log(token)
//         ret=v

//     });
//     while(ret === undefined) {
//       require('deasync').sleep(100);
//     }
//     // returns hello with sleep; undefined without
//     return ret;    
//   }

// var token=SyncFunction();
// console.log(token)


// var a=deasync();
// console.log(a)
// console.log("MJCET")




 



