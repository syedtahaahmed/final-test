const express = require('express');
const bodyParser = require('body-parser');
const SunshineConversationsApi = require('sunshine-conversations-client');
var request = require('request')

const askCorrectphone = (appId, conversationId) => {

    const apiInstance = new SunshineConversationsApi.MessagesApi();
    const data = new SunshineConversationsApi.MessagePost();
    data.author = {
        type: 'business'
    };
    data.content = {
        type: 'text',
        text: 'Please enter Correct phone number',
    };

    apiInstance.postMessage(appId, conversationId, data)
        .then(response => {

        })
        .catch(error => {
            console.log(error)
        })

}
module.exports = askCorrectphone;