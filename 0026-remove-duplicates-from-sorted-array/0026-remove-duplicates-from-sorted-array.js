/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    k=0;
    for(i=0;i<nums.length;i++){
    if(nums[i]!==nums[k-1]){
        nums[k]=nums[i];
        k++
    }
    

    }return k;
    
};