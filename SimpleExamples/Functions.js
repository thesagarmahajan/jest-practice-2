const axios = require('axios');

async function fetchingData(){
    let res = await axios.get("https://reqres.in/api/users")
    let data = res.data;
    return data
}

function mySimpleFunction(arg, success, error){
    if(arg){
        success()
    }
    else{
        error("ERROR")
    }
}

function myPrimeFilter(nums, callback){
    let count=0;
    for (let i = 0; i < nums.length; i++) {
        count=0;
        for (let j = 1; j <= nums[i]; j++) {   
            if(nums[i]%j==0){
                count++;
            }
        }
        if(count==2){
            callback(nums[i])
        }
    }
}

module.exports = {fetchingData, mySimpleFunction, myPrimeFilter}