const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = ([returnFirstTwoDrivers,returnLastTwoDrivers])

function createFareMultiplier(multiplier){
    return function(fare){
        return fare*multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, selectionFunction){
    if(selectionFunction === returnFirstTwoDrivers){
        return drivers.slice(0,2)
    } else if(selectionFunction === returnLastTwoDrivers){
        return drivers.slice(-2)
    } else{
        return 'invalid function'
    }
}