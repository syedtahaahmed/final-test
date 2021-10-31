const request=require('request')
const sendOtp=(Mobile)=>{
   console.log(Mobile)



request({
   method: "GET",
   url: 'http://customer.northeurope.cloudapp.azure.com/otpservice/otp/generateOTP/'+Mobile,


   json: true, // <--Very important!!!
}, function(error, response, body) {

   console.log(body);
});
}
module.exports=sendOtp
    
    
    
    