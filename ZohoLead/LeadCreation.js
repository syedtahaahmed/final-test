var request = require('request')

const insertlead = (displayName, conversationId, fn) => {

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
            "Authorization": "Zoho-oauthtoken 1000.e506734d6e75a5ef3a0a62d5ad8632c7.ee96cd0b7a59fe9fe1ed81a13c2bc831"
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