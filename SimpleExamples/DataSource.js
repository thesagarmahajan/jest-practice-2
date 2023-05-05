function getUserProfile(){
    return {
        id:1,
        name:"Someone",
        age:34,
        isActive: false,
        email:"someone@gmail.com",
        phone:["1231231232", "1231231232"]
    }
}

module.exports = {getUserProfile}