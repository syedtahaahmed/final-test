var request = require('request')

const insertlead = (accesstoken, displayName, conversationId, fn) => {

    var myJSONObject = {
        "data": [{
            "Company": "scrys's crm",
            "Last_Name": displayName,
            "conversationid": conversationId,

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
            "Authorization": "Zoho-oauthtoken "+accesstoken
        },

        json: true, // <--Very important!!!
        body: myJSONObject
    }, function(error, response, body) {
        if (body) {
            var created = true
            fn(created)
        }

        console.log("lead created in zoho crm");
    });
}
module.exports = insertlead;