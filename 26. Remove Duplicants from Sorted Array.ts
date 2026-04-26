function removeDuplicates(nums: number[]): number {
  const set = new Set<number>();
  let count = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      count++;
    }
  }

  const unique = [...set];
  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }

  return count;
}
