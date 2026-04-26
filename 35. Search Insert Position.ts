function searchInsert(nums: number[], target: number): number {
  let k = Math.floor(nums.length / 2);
  let subArr = nums;

  if (subArr[k] === target) return k;
  while (k >= 1) {
    if (subArr[k] > target) {
      subArr = subArr.slice(0, k);
      k = Math.floor(subArr.length / 2);
    } else {
      subArr = subArr.slice(k, subArr.length);
      k = Math.floor(subArr.length / 2);
    }
  }

  if (subArr[k] === target || subArr[k] > target) {
    return nums.indexOf(subArr[k]);
  } else {
    return nums.indexOf(subArr[k]) + 1;
  }
}
