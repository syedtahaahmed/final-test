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
            "Authorization": "Zoho-oauthtoken 1000.2d9607890a7abcf9969e297f3df5b600.92119edd856232771206951e081bb24c"
        },

        json: true, // <--Very important!!!
        body: myJSONObject
    }, function(error, response, body) {
        console.log(" Phone Number updated in zoho crm");
    });
}
module.exports = updatePhone;