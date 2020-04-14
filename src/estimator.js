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
  let impact_currentlyAffected;
  return (impact_currentlyAffected = myData['reportedCases']) * 10;
}
function currentlyInfectedSevereImpact(myData) {
  let severImpact_currentlyInfected;
  return (severImpact_currentlyInfected = myData['reportedCases']) * 50;
}

function infectionsByRequestedTimeCurrentlyInfected(myData) {
    return (currentlyInfected(myData) * (2 ** 9))
}

function infectionsByRequestedTimeSevereImpact(myData) {
    return (currentlyInfectedSevereImpact(myData)* (2 ** 9))
}


function returnFinalData (anyData) {
let FinalData = {
'data':anyData ,
'estimates' : {
'currentlyInfected' : {
'currentlyInfected': currentlyInfected(anyData)
            },
            'severeImpactCurrentlyInfected' : {
                'severeImpactCurrentlyInfected' : currentlyInfectedSevereImpact(anyData)
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

