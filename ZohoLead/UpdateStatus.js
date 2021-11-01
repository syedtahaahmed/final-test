var request = require('request');

const updatestatus = (id) => {

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
            "Authorization": "Zoho-oauthtoken 1000.79dfd2c09936f15f0806a7fe91053688.e3deb782c22afbeee32f9842be1b7651"
        },

        json: true, // <--Very important!!!
        body: myJSONObject
    }, function(error, response, body) {
        console.log(" Status updated in zoho crm");
    });
}
module.exports = updatestatus;