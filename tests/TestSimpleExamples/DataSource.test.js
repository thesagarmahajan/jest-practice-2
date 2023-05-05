const {getUserProfile} = require("../../SimpleExamples/DataSource")

describe('Testing Different Data Sets', () => {
    const userProfile = getUserProfile()
    const phoneInfo = {
        size: userProfile.length,
        type: typeof(userProfile.phone)
    }
    test('Testing User Profile', () => {
        expect(userProfile).toHaveProperty("id");
        expect(userProfile.email).toMatch(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(phoneInfo.type=="object" && phoneInfo.size>0){
            userProfile.phone.forEach(element => {
                expect(element).toMatch(/^\d{10}$/);
            });
        }
        else if(phoneInfo.type=="string"){
            expect(userProfile.phone).toMatch(/^\d{10}$/);
        }
        else{
            expect(userProfile.phone).toBeNull();
        }
    });
});