 var Lang = require('./Askquestions/askLang.js');
var askPhone = require('./Askquestions/askPhone.js');
var askCorrectphone = require('./Askquestions/askCorrectphone.js');
var askOtp = require('./Askquestions/askOtp.js');
var askCorrectotp = require('./Askquestions/askCorrectotp.js');

var sendOtp=require('./OtpService/sendOtp.js');
var verifyOtp=require('./OtpService/verifyOtp.js')


var otpVerified=require('./sendThanks/otpVerified')



var insertlead = require('./ZohoLead/LeadCreation.js');
var LeadCheck = require('./ZohoLead/ZohoLeadCheck.js');
var updateDesignation = require('./ZohoLead/UpdateDesignation.js');
var updatePhone = require('./ZohoLead/updatePhone.js');
var updatestatus=require('./ZohoLead/UpdateStatus.js')

var logger = require('./logger.js');
// var constant = require('./Constants.js');
// var builder = require('botbuilder');
// var botbuilder_azure = require("botbuilder-azure");

const express = require('express');
const bodyParser = require('body-parser');
const SunshineConversationsApi = require('sunshine-conversations-client');
var request = require('request');
const { response } = require('express');

//global
var regx_num=/^\d+$/;
var regx_10_digit = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
var regex_3_digit=/^[0-9]{3}$/;
var regex_5to6_digit=/^[0-9]{5,6}$/;
var regex_4_digit=/^[0-9]{4}$/;
var regex_7to9_digit=/^[0-9]{7,9}$/;
var regex_11to12_digit=/^[0-9]{11,12}$/;

// Config
let defaultClient = SunshineConversationsApi.ApiClient.instance;
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'app_6177eed67c932f00e5f7eac9';
basicAuth.password = '8g2OG59vCjPAxG8vsxnQHOKqFnTjKqVLljW8YIxhzl-Sx_KssLerkDo1y16UdAAc9PNUypamAC9nQ9DUP_l1Zw';
//const PORT = 5050;
const apiInstance = new SunshineConversationsApi.MessagesApi()
const app = express();
const PORT=process.env.PORT||5050
app.use(bodyParser.json());

app.post('/messages', function(req, res) {
    console.log("test")
    const appId = req.body.app.id;
    const trigger = req.body.events[0].type;
    logger.info(appId);
    logger.info(trigger);

    if (trigger === 'conversation:message') {
        const authorType = req.body.events[0].payload.message.author.type;
        const displayName = req.body.events[0].payload.message.author.displayName;
        logger.info(authorType);
        logger.info(displayName);

        if (authorType === 'user') {

            const conversationId = req.body.events[0].payload.conversation.id;
            console.log(conversationId)
            logger.info("convo id is " + conversationId);
            var message = req.body.events[0].payload.message.content.text
            console.log(message)
            logger.info("this is message " + message);

            if (message == "English" || message == "Hindi") {
                LeadCheck(appId, displayName, conversationId, function(flag, id, Mobile, whenbuy, state1, district1, Designation) {
                    if (flag === 1 && Designation == null) {
                        updateDesignation(id, message);
                        askPhone(appId, conversationId);
                    } else {
                        console.log("Designation is not null")
                    }

                });
            }
            else if((regx_num.test(message))&&((regex_7to9_digit.test(message))||(regex_11to12_digit.test(message)))){
                askCorrectphone(appId,conversationId);
                console.log(" your number is lesser than 10 digits,send correct number plz")
            }

            else if((regx_num.test(message))&&(regx_10_digit.test(message))){
              LeadCheck(appId, displayName, conversationId, function(flag, id, Mobile, whenbuy, state1, district1, Designation) {
                if (flag === 1 && Mobile == null) {
                    updatePhone(id, message);
                    sendOtp(message)
                    askOtp(appId, conversationId);
                } else {
                    //console.log("phone_number is not null")
                }
            });
          }
          else if((regx_num.test(message))&&((regex_3_digit.test(message))||(regex_5to6_digit.test(message)))){
              askCorrectotp(appId,conversationId,"Please Enter Correct OTP")
          }
          else if(regex_4_digit.test(message)){
            LeadCheck(appId, displayName, conversationId, function(flag, id, Mobile, whenbuy, state1, district1, Designation) {
                console.log("mobile is "+Mobile)
                console.log("id is "+id)
                console.log("Designation is"+Designation)
                if (flag === 1 && Mobile != null) {
                    console.log(Mobile+"kdsknfkss"+message)
                verifyOtp(Mobile, message,(response)=>{
                    if(response===true){
                        otpVerified(appId,conversationId);
                        updatestatus(id);

                        
                    }

                });

                } else {
                    console.log("phone_number is not null")
                }
            });
          }

             else {
                LeadCheck(appId, displayName, conversationId, function(flag, id, Mobile, whenbuy, state1, district1, Designation) {
                    if (flag === 1) {
                        if (Designation == null) {
                            Lang(appId, conversationId);
                        }
                        console.log(Designation);
                        console.log("Lead Exist");
                    } else {
                        console.log("no lead found");
                        insertlead(displayName, conversationId, function(created) {
                            if (created == true) {
                                console.log("created lead");
                                Lang(appId, conversationId);
                            }
                        });
                    }
                });
            }
            res.end();
        } else {
            console.log("author type is business")
        }

    } else {
        console.log("message conversation not equals to trigger")
    }

});

// Listen on port
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    logger.info(`App listening on port ${PORT}`);
});