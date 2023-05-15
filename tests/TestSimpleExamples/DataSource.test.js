const {getUserProfile} = require("../../SimpleExamples/DataSource")

describe('Testing Different Data Sets', () => {
    const userProfile = getUserProfile()
    const phoneInfo = {
        size: userProfile.length,
        type: typeof(userProfile.phone)
    }
    test('Testing User Profile', () => {

        expect(userProfile).toHaveProperty("id");
        
        expect(userProfile.age).toBeGreaterThan(18);
        expect(userProfile.name.length).toBeGreaterThan(3);

        expect(userProfile.email).toMatch(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        
        // If phone is an array
        if(phoneInfo.type=="object" && phoneInfo.size>0){
            userProfile.phone.forEach(element => {
                expect(element).toMatch(/^\d{10}$/);
            });
        }
        // If phone is a string
        else if(phoneInfo.type=="string"){
            expect(userProfile.phone).toMatch(/^\d{10}$/);
        }
        // Allowing phone to be null
        else{
            expect(userProfile.phone).toBeNull();
        }
    });
});