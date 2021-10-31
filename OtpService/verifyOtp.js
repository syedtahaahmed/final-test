const request=require('request')
const verifyOtp=(Mobile,OTP,callback)=>{
   console.log(Mobile)



request({
   method: "GET",
   url: 'http://customer.northeurope.cloudapp.azure.com/otpservice/otp/validateOTP/'+Mobile+'/'+OTP,


   json: true, // <--Very important!!!
}, function(error, response, body) {
    callback(body.data);

   console.log(body);
});
}
module.exports=verifyOtp
    
    
    
    