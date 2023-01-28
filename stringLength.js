const stringLength = (string) => {
let length= 0;
stringArray = string.split('');
stringArray.forEach(element => {
    length ++;
});
return length;
}

module.exports = stringLength;