
function MobileOTP() {

    function display(OTP) {
        console.log("New OTP on Mobile Site " + OTP);
    }

    //implements ObserverInterface
    return {
        "onOTPchange": display,
    }
}
module.exports = MobileOTP;