const reverseString = (string) => {
    let stringArray = string.split(''); 
    let newArray = [];
    for(let i = stringArray.length; i>=0; i--){
        newArray.push(string[i]);
    }
    return newArray.join('')
}

module.exports = reverseString;