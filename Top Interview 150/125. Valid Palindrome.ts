function isPalindrome(s: string): boolean {
    let planString: string = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let reverseString: string = ''

    for (let i = 0; i <= planString.length - 1; i++) {
        reverseString += planString[planString.length - 1 - i]
    }

    return reverseString === planString
};