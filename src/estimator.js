const covid19ImpactEstimator = (data) => data;
module.exports = covid19ImpactEstimator;
const info = {
    'region': {
        name: 'Africa',
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
        },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
};

function currentlyInfected(myData) {
    return (impact_currentlyAffected = myData['reportedCases']) * 10;
}
function currentlyInfectedsevereImpact(myData) {
    return (severImpact_currentlyInfected = myData['reportedCases']) * 50;
}

function infectionsByRequestedTimeCurrentlyInfected(myData) {
    return (currentlyInfected(myData) * (2 ** 9))
}

function infectionsByRequestedTimeSevereImpact(myData) {
    return (currentlyInfectedsevereImpact(myData)* (2 ** 9))
}


function returnFinalData (anyData) {
let FinalData = {
'data':anyData ,
'estimates' : {
'currentlyInfected' : {
'currentlyInfected': currentlyInfected(anyData)
            },
            'severeImpactCurrentlyInfected' : {
                'severeImpactCurrentlyInfected' : currentlyInfectedsevereImpact(anyData)
            },
            'infectionsByRequestedTimeCurrentlyInfected' : {
                'infectionsByRequestedTimeCurrentlyInfected' : infectionsByRequestedTimeCurrentlyInfected(anyData)
            } ,
            'infectionsByRequestedTimeSevereImpact' : {
                'infectionsByRequestedTimeSevereImpact' : infectionsByRequestedTimeSevereImpact(anyData)
}
}
}
return FinalData ;
}

console.log(returnFinalData(info));
console.log(returnFinalData(info));

