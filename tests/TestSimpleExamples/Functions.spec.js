const { fetchingData } = require("../../SimpleExamples/Functions");
// const axios = require('axios');

// jest.mock('axios')
// let axios = jest.fn()
// describe('Testing Functions',  () => {
//     test('Testing Axios', async () => {
//         await fetchingData()
//         expect(axios.get).toHaveBeenCalled(); 
//     });
// });

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

// Mocking function
test('Example-1 Without Mocking', () => {
    let err, count=0;
    mySimpleFunction(true, ()=>{count++}, (error)=>{err=error})
    expect(count).toBe(1)
    expect(err).toBeUndefined();
    count=0;
    mySimpleFunction(false, ()=>{count++}, (error)=>{err=error})
    expect(count).toBe(0);
    expect(err).toBe("ERROR");
});

test('Example-1 With Mocking', () => {
    let successMock = jest.fn()
    let errorMock = jest.fn()
    mySimpleFunction(true, successMock, errorMock)
    expect(successMock).toHaveBeenCalled();
    // expect(errorMock).toHaveBeenCalledTimes(0);
    expect(errorMock).not.toHaveBeenCalled();
    jest.clearAllMocks()
    mySimpleFunction(false, successMock, errorMock)
    expect(successMock).not.toHaveBeenCalled()
    expect(errorMock).toHaveBeenCalled();

});

test.only('Example-2 Without Mocking', () => {
    let c=0;
    let input = [2, 5, 8, 9, 13];
    let expectedOutput = [2,5,13]
    let actualOutput = [];
    myPrimeFilter(input, (prime)=>{
        c++;
        actualOutput.push(prime)
    })    

    expect(c).toBe(expectedOutput.length);
    expect(expectedOutput[0]).toBe(actualOutput[0]);
    expect(expectedOutput[expectedOutput.length-1]).toBe(actualOutput[actualOutput.length-1]);

});

test('Example-2 With Mocking', () => {
    let mymock = jest.fn(x=>x)
    let expectedOutput = [2,5,13]
    let input = [2, 5, 8, 9, 13];
    myPrimeFilter(input, mymock)
    expect(mymock).toHaveBeenCalledTimes(3);
    expect(mymock.mock.calls[0][0]).toBe(expectedOutput[0])
    expect(mymock.mock.lastCall[0]).toBe(expectedOutput[expectedOutput.length-1])
});

// Async Function
test('Testing fetched data', async () => {
    const data = await fetchingData()
    expect(data).toHaveProperty("data[0].id", 1);
});