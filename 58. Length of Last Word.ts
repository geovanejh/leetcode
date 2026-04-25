function lengthOfLastWord(s: string): number {

    const split = s.split(" ")
    let stop = false

    while (!stop) {
        if (split[split.length - 1] === "") {
            split.pop()
        } else {
            stop = true
        }
    }

    const result = split[split.length - 1].length

    return result
};