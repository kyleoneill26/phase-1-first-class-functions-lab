// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fareMultiplier) => {
    return function(drivers){
        return fareMultiplier * drivers;
    }
}
const fareDoubler = (drivers) => {
    return drivers * 2;
}
const fareTripler = (drivers) => {
    return drivers * 3;
}
const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}