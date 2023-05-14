const axios = require('axios');

async function fetchingData(){
    let res = await axios.get("https://reqres.in/api/users")
    let data = res.data;
    return data
}


module.exports = {fetchingData}