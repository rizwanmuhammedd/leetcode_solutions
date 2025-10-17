/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xorResult = x ^ y;
    let binaryFormat = xorResult.toString(2);
    let Distance = 0;
    
    for(let digit of binaryFormat.split('')) {
        if(digit === '1')    
            Distance++;
    }
    
    return Distance;
};