const functionString = `
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
`;

// Using eval to define the function
eval(functionString);

// Check if the function is defined
console.log(typeof twoSum); // Should log 'function'

// Now call the twoSum function
const result = twoSum([2, 7, 11, 15], 9);
console.log(result); // Output: [0, 1]