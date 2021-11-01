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
            "Authorization": "Zoho-oauthtoken 1000.2d9607890a7abcf9969e297f3df5b600.92119edd856232771206951e081bb24c"
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