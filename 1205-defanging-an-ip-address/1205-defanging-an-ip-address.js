/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let new1 = address.replaceAll(".","[.]")
  return new1 ;
};

console.log(defangIPaddr("235.1.1.1"))