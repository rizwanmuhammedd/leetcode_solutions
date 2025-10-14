/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var hasIncreasingSubarrays = function (nums, k) {
    const isIncreasing = (start, len) => {
        for (let i = start; i < start + len - 1; i++) {
            if (nums[i] >= nums[i + 1]) return false;
        }
        return true;
    };

    for (let a = 0; a + 2 * k <= nums.length; a++) {
        if (isIncreasing(a, k) && isIncreasing(a + k, k)) {
            return true;
        }
    }
    return false;
};