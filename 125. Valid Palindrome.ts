function isPalindrome(s: string): boolean {
    let planString: string = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let left = 0
    let right = planString.length - 1

    while (right > 0) {
        if (planString[left] !== planString[right]) {
            return false
        }

        right--
        left++
    }

    return true
};