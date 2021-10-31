const express = require('express');
const bodyParser = require('body-parser');
const SunshineConversationsApi = require('sunshine-conversations-client');
var request = require('request')

const Lang = (appId, conversationId) => {

    const apiInstance = new SunshineConversationsApi.MessagesApi();
    const data = new SunshineConversationsApi.MessagePost();
    data.author = {
        type: 'business'
    };
    data.content = {
        type: 'text',
        text: 'Please select language',
        actions: [{
                type: 'reply',
                text: 'English',
                payload: 'eng',

            },
            {
                type: 'reply',
                text: 'Hindi',
                payload: 'hin',

            }
        ]
    };

    apiInstance.postMessage(appId, conversationId, data)
        .then(response => {

        })
        .catch(error => {
            console.log(error)
        })

}
module.exports = Lang;