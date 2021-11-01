var request = require('request');

const check_ZOHO_FOR_CONVERSATION_ID = (appId, displayName, conversationId, fn) => {

    request({
        method: "GET",
        url: "https://www.zohoapis.in/crm/v2/Leads?fields=id,conversationid,when_going_to_buy,Mobile,state1,district1,Designation,Lead_Status",
        headers: {
            "Authorization": "Zoho-oauthtoken 1000.79dfd2c09936f15f0806a7fe91053688.e3deb782c22afbeee32f9842be1b7651"
        },


        //json: true,   // <--Very important!!!
    }, function(error, response, body) {
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

        //console.log((JSON.parse(body)).data[1])
    });


}
module.exports = check_ZOHO_FOR_CONVERSATION_ID;