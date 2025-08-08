/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence){
    
    let sen="abcdefghijklmnopqrstuvwxyz"
    for(let key of sen){
        if(!sentence.includes(key)){
            return false;
        }
        }
    
    return true;
}