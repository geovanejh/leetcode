// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[], K: number): number[] {
    while (K !== 0) {
        A = rotate(A)
        K--
    }

    return A
}

function rotate(array: number[]): number[] {
    let newArr: number[] = []

    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i + 1] === undefined) {
            newArr[0] = array[i]
        } else {
            newArr[i + 1] = array[i]
        }
    }

    return newArr
}