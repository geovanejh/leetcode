    function majorityElement(nums: number[]): number {
        const alreadyCounted: number[] = []

        for (let i = 0; i <= nums.length; i++) {
            if (!alreadyCounted.includes(nums[i])) {
                let counter = 0
                for (let j = 0; j <= nums.length; j++) {
                    if (nums[i] === nums[j]) {
                        counter++
                        if (counter >= nums.length / 2) {
                            return nums[i]
                        }
                    }
                }
                alreadyCounted.push(nums[i])
            }
        }
    };