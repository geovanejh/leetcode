function maxProfit(prices: number[]): number {
    let biggestDiff: number = 0
    let minPrice: number = Infinity

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
            let diff = prices[i] - minPrice
            if (diff > biggestDiff) {
                biggestDiff = diff
            }
        }
    }

    return biggestDiff
};