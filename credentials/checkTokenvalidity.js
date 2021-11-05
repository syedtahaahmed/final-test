var request = require('request');
const generateRefreshtoken = require('./generateRefreshtoken');
const checkTokenvalidity = (fn) => {

    var myJSONObject = {
        "data": [{
            "Company": "test",
            "Last_Name": "test",
            "conversationid": null,

        }],
        "trigger": [

            "approval",
            "workflow",
            "blueprint"
        ]

    };
    request({
        method: "POST",
        url: "https://www.zohoapis.in/crm/v2/Leads",
        headers: {
            "Authorization": "Zoho-oauthtoken 000.8b2793ad1ecc472113112d3ec2655472.e7b6e08df1e8e9f9a013e32fe1def9e3"
        },

        json: true,
        body: myJSONObject
    }, function(error, response, body) {
        console.log(body.code)
        if(body.code==="INVALID_TOKEN"){
            generateRefreshtoken(function(body){
                fn(body)
            })         //if token expires
        }
        else if(error){
            console.log("error")
            fn(error)     //if any other error

        }
        else{
            fn("1000.8b2793ad1ecc472113112d3ec2655472.e7b6e08df1e8e9f9a013e32fe1def9e3")       //if no error

        }
    });
}
checkTokenvalidity(function(x){
    console.log(x)
})
