const express = require('express');
const bodyParser = require('body-parser');
const SunshineConversationsApi = require('sunshine-conversations-client');
var request = require('request')

const askphone = (appId, conversationId) => {

    const apiInstance = new SunshineConversationsApi.MessagesApi();
    const data = new SunshineConversationsApi.MessagePost();
    data.author = {
        type: 'business'
    };
    data.content = {
        type: 'text',
        text: 'Please enter your phone number',
    };

    apiInstance.postMessage(appId, conversationId, data)
        .then(response => {

        })
        .catch(error => {
            console.log(error)
        })

}
module.exports = askphone;