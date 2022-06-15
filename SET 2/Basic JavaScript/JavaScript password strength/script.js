function isStrongPassword(input){
    if(input.includes("password")){
        console.log(`Contains "password"`)
        return false;
    }else if(input.length < 8){
        console.log("Too short")
        return false;
    }else if(input === input.toLowerCase()){
        console.log("No uppercase characters")
        return false;
    }
    return true;
}