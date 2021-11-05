var request = require('request');

const updateDesignation = (accesstoken, id, message) => {

    console.log("id is " + id)
    var myJSONObject = {
        "data": [{
            "id": id,
            "Designation": message
        }],
        "trigger": [

            "approval",
        ]

    };
    request({
        method: "PUT",
        url: "https://www.zohoapis.in/crm/v2/Leads",
        headers: {
            "Authorization": "Zoho-oauthtoken "+accesstoken
        },

        json: true, // <--Very important!!!
        body: myJSONObject
    }, function(error, response, body) {
        console.log(" Language -- Designation updated in zoho crm");
    });
}
module.exports = updateDesignation;