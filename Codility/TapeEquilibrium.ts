function solution(A: number[]): number {
    let sum = A.reduce((sum, value) => sum + value, 0)

    let leftSum = 0
    let minDif = Infinity

    for (let i = 0; i < A.length - 1; i++) {
        leftSum += A[i]
        const rightSum = sum - leftSum

        const dif = Math.abs(leftSum - rightSum)

        if (dif < minDif) {
            minDif = dif
        }
    }

    return minDif
}