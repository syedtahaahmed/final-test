var request = require('request');

const updatestatus = (accesstoken, id) => {

    console.log("id is " + id)
    var myJSONObject = {
        "data": [{
            "id": id,
            "Lead_Status": "Contacted"
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
        console.log(" Status updated in zoho crm");
    });
}
module.exports = updatestatus;