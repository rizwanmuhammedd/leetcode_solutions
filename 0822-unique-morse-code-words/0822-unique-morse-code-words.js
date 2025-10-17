/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
    const set = new Set();
    
    for (let word of words) {
        set.add(toMorse(word));
    }
    
    return set.size
};

const toMorse = (word) => {
    let result = '';

    for (let char of word) {
        result += map.get(char);
    }
    
    return result;
}

const map = new Map([
  ['a', '.-'],
  ['b', '-...'],
  ['c', '-.-.'],
  ['d', '-..'],
  ['e', '.'],
  ['f', '..-.'],
  ['g', '--.'],
  ['h', '....'],
  ['i', '..'],
  ['j', '.---'],
  ['k', '-.-'],
  ['l', '.-..'],
  ['m', '--'],
  ['n', '-.'],
  ['o', '---'],
  ['p', '.--.'],
  ['q', '--.-'],
  ['r', '.-.'],
  ['s', '...'],
  ['t', '-'],
  ['u', '..-'],
  ['v', '...-'],
  ['w', '.--'],
  ['x', '-..-'],
  ['y', '-.--'],
  ['z', '--..']
]);