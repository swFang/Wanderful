const advisoryData = require('../mockData/mockAdvisoryData.json');
const axios = require('axios');
const countryCodeAPI = "https://restcountries.eu/rest/v2/name/";

async function getAdvisoryData(location) { 
    let countryData;
    let res = await getCountryCode(location).then((res) => countryData = advisoryData.data[res]);
    if(countryData && (countryData['has-advisory-warning'] || countryData['has-regional-advisory'])) {
        return countryData.eng['advisory-text']; 
    } else  {
        return 'nothing to worry about';
    }

}

async function getCountryCode(location) {
    const locationAPIURL = countryCodeAPI + location;
    let countryCode = await axios.get(locationAPIURL)
        .then((response)=> {
            return response.data[0].alpha2Code;        
        }).catch((error) => {
            console.log(error)
        });
    return countryCode;
}

module.exports = getAdvisoryData;