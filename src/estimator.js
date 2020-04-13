const covid19ImpactEstimator = (data) => data;

var data ={
"region": {
"name": "Africa",
"avgAge": 19.7,
"avgDailyIncomeInUSD": 5,
"avgDailyIncomePopulation": 0.71
},
"periodType": "days",
"timeToElapse": 58,
"reportedCases": 674,
"population": 66622705,
"totalHospitalBeds": 1380614
};

function currentlyInfected(myData){
return (impactCurrentlyAffected =myData['reportedCases'])*10;
}
function currentlyInfectedsevereImpact(myData){
return (severImpactCurrentlyInfected =myData['reportedCases'])*50;
}

function infectionsByRequestedTimeCurrentlyInfected(myData) {
    return (currentlyInfected(myData)* Math.pow(2,9))
}

function infectionsByRequestedTimeSevereImpact(myData) {
    return (currentlyInfectedsevereImpact(myData)* Math.pow(2,9))
}

function returnFinalData(anyData){
var finalData ={
"data":anyData,
"estimates":{
"currentlyInfected":{
"currentlyInfected":currentlyInfected(anyData)
},
"severeImpactCurrentlyInfected":{
"severeImpactCurrentlyInfected":currentlyInfectedsevereImpact(anyData)
},
"infectionsByRequestedTimeCurrentlyInfected": {
    "infectionsByRequestedTimeCurrentlyInfected": infectionsByRequestedTimeCurrentlyInfected(anyData)
},
"infectionsByRequestedTimeSevereImpact": {
    "infectionsByRequestedTimeSevereImpact": infectionsByRequestedTimeSevereImpact(anyData)
}
}
}
return finalData;
}

console.log(currentlyInfected(data))
console.log(returnFinalData(data))
// export default covid19ImpactEstimator;
