//JS already has .indexOf method, but it would be too easy, so here is a custom implementation of it
function strStr(haystack: string, needle: string): number {
    let correct: number = 0

    for (let i = 0; i <= haystack.length-1; i++) {
        correct = 0
        for (let j = 0; j <= needle.length-1; j++) {
            if (haystack[i + j] === needle[j]) {
                correct++
                if (correct === needle.length) {
                    return i
                }
            }
        }
    }

    return -1
};