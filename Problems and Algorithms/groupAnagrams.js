// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let anagram = {};
  let ans = [];
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");
    if (!anagram[sorted]) {
      anagram[sorted] = [];
    }
    anagram[sorted].push(strs[i]);
  }
  Object.values(anagram).map((val) => {
    ans.push(val);
  });
  console.log(ans);
};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strs);

// var sortAlphabets = function (text) {
//   return text.split("").sort().join("");
// };
// 1.Convert string to array
// 2.Sort array
// 3.Convert back array to string
