const { json } = require('body-parser');
var request = require('request');
var token=require('../index.js').token
const { ConversationListFilter } = require('sunshine-conversations-client');

const check_ZOHO_FOR_CONVERSATION_ID = (accesstoken,appId, displayName, conversationId, fn) => {

    request({
        method: "GET",
        url: "https://www.zohoapis.in/crm/v2/Leads?fields=id,conversationid,when_going_to_buy,Mobile,state1,district1,Designation,Lead_Status",
        headers: {
            "Authorization": "Zoho-oauthtoken "+accesstoken
        },


        //json: true,   // <--Very important!!!
    }, function(error, response, body) {
        
 var error1= (JSON.parse( response.body)).code


        if(error1==="INVALID_TOKEN"){
            fn(-1,undefined,undefined,undefined,undefined,undefined,undefined)
        }
        else if(error){
            fn((-2,undefined,undefined,undefined,undefined,undefined,undefined) ) 
        }
        else{ 

        let flag = 0
        var dat = (JSON.parse(body)).data
        var l = (dat.length)
        for (let i = 0; i < l; i++) {
            if (dat[i].conversationid === conversationId) {
                flag = 1
                console.log("lead found")
                fn(flag, dat[i].id, dat[i].Mobile, dat[i].when_going_to_buy, dat[i].state1, dat[i].district1, dat[i].Designation,dat[i].Lead_Status)

                break
            }
        }
        if (flag === 0) {
            //sendquestions(appId,conversationId)
            console.log("lead not found")
            fn(flag, 0, 0, 0, 0, 0, 0)

        }
    }

        //console.log((JSON.parse(body)).data[1])
    });



}
module.exports = check_ZOHO_FOR_CONVERSATION_ID;