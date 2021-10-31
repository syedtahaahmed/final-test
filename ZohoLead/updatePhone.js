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
            "Authorization": "Zoho-oauthtoken 1000.e506734d6e75a5ef3a0a62d5ad8632c7.ee96cd0b7a59fe9fe1ed81a13c2bc831"
        },

        json: true, // <--Very important!!!
        body: myJSONObject
    }, function(error, response, body) {
        console.log(" Phone Number updated in zoho crm");
    });
}
module.exports = updatePhone;