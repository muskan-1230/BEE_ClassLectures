
 let otp = "";

function otpgenerator(len){
    try {
       
    for(let i = 0 ; i<len ;i++){
        otp+=Math.floor(Math.random()*10);
    }
    return otp;
    } catch (error) {
        throw error;
    }
    
}


function otpverify(otp){
    try {
        if(otp!=userOtp){
            return false;
        }
        return true;
    } catch (error) {
        throw error;
    }
}
