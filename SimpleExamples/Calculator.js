function Addition(a, b){
    return a+b;
}

function Subtraction(a, b){
    if(a>b){
        return a-b;
    }
    return b-a;
}

function Division(a, b){
    if(a==0 || b==0)
    {
        throw new Error("Can't use '0' (Zero).")
    }
    else if(a>b){
        return a/b
    }
    return b/a
}

module.exports = {Addition, Subtraction, Division};