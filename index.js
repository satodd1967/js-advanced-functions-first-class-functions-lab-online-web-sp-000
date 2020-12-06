// Code your solution in this file!
let returnFirstTwoDrivers = function(array) {
    const first = array.slice(0, 2)
    return first
}

let returnLastTwoDrivers = function(array) {
    const last = array.slice(Math.max(array.length -2, 0))
    return last
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers)
}
