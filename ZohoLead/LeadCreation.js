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
            "Authorization": "Zoho-oauthtoken 1000.79dfd2c09936f15f0806a7fe91053688.e3deb782c22afbeee32f9842be1b7651"
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