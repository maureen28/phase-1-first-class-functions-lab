// // Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

let returnFirstTwoDrivers = drivers => {
    return drivers.slice(0,2)
};

let returnLastTwoDrivers = (drivers) =>{
    return drivers.slice(drivers.length -2)
};

let selectingDrivers =[
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

let createFareMultiplier = multiplier => {
    return function(n){
        return n * multiplier
    } 
}
function fareDoubler(createFareMultiplier){
    return createFareMultiplier * 2
}
function fareTripler(createFareMultiplier){
    return createFareMultiplier * 3
}

let selectDifferentDrivers = (arrayOfDrivers, selectedDrivers) => {
	return selectedDrivers(arrayOfDrivers)
}



