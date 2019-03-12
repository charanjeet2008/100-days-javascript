function DesktopOTP() {

    function display(OTP) {
        console.log("New OTP on Desktop Site " + OTP);
    }

    //implements ObserverInterface
    return {
        "onOTPchange": display
    }
}
module.exports = DesktopOTP;