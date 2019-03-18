const ObservableOTP = require("./ObservableOTP");
const MobileOTP = require("./MobileOTP");
const DesktopOTP = require("./DesktopOTP");


var ObservableObj = new ObservableOTP();

//Mobile Site Code
const MobileSite = new MobileOTP();
ObservableObj.addObserver(MobileSite); //Cannot be done inside constructor as this would not have the object returned by Revealing Module Pattern that has all the functions

const DesktopSite = new DesktopOTP();
ObservableObj.addObserver(DesktopSite)
