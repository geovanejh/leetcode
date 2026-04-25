function longestConsecutive(nums: number[]): number {
  let set = new Set(nums);
  let streak = 0;

  if (!nums.length) return 0;

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let currentNumber = nums[i];
      let currentStreak = 1;

      while (set.has(currentNumber + 1)) {
        currentNumber += 1;
        currentStreak++;
      }
      streak = Math.max(currentStreak, streak);
    }
  }

  return streak > 0 ? streak : 1;
}
