function longestCommonPrefix(strs: string[]): string {
    let counter: number = 0

    for (let i = 1; i <= strs[0].length; i++) {
        let check: number = 0
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].startsWith(strs[0].slice(0, i))) {
                check++
                if (check === strs.length) {
                    counter++
                }
            } else {
                return strs[0].slice(0, counter)
            }
        }
    }

    return strs[0].slice(0, counter)
}