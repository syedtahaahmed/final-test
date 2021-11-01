var request = require('request');

const updatePhone = (id, message) => {

    console.log("id is " + id)
    var myJSONObject = {
        "data": [{
            "id": id,
            "Mobile": message
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
        console.log(" Phone Number updated in zoho crm");
    });
}
module.exports = updatePhone;