var request = require('request')
const generateRefreshtoken = (fn) => {
   
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
    //console.log(( JSON.parse(body)).access_token)
    fn(( JSON.parse(body)).access_token)
    //console.log(body)

  


})
}
module.exports=generateRefreshtoken;