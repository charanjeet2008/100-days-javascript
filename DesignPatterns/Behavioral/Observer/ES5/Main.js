let Observable = require("./Observable");
let MobileOTP = require("./MobileOTP");
let DesktopOTP = require("./DesktopOTP");


let OTPPublisher = new Observable();
//Mobile Site Code
let MobileSite = new MobileOTP();
OTPPublisher.addObserver(MobileSite); //Cannot be done inside constructor as this would not have the object returned by Revealing Module Pattern that has all the functions


let DesktopSite = new DesktopOTP();
OTPPublisher.addObserver(DesktopSite)
