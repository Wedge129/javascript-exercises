const reverseString = function (string) {
    const stringArray = [];
    const size = string.length;
    for (let i = 0; i < size; i++) {

        let char = string.charAt(i);
        stringArray.push(char);
    }
    const stringArrayReversed = stringArray.reverse();
    const finalString = stringArrayReversed.join("");
    return finalString;
};


// Do not edit below this line
module.exports = reverseString;
