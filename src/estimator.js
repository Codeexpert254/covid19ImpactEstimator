const covid19ImpactEstimator = (data) => {
    const input = data;
    return {
        data: input,
        inspect: {},
        severeImpact: {},
    };
};

export default covid19ImpactEstimator;
const covid19data = {
    region: {
    name: "Africa",
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
    };

    function currentlyInfected (reportedCases, number){
        return reportedCases * number;
    }
    let reportedCases = 674;
    let number = 10;
    console.log(currentlyInfected(reportedCases, number));

