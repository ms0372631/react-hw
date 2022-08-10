

const generateData = (startDate) => {
    const [mn, mx] = [25, 200]
    const length = 200
    const endDate = new Date()
    const startM = startDate.getTime()
    const spanMs = endDate.getTime() - startM
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return Array.from({ length }, () => startM + Math.round(Math.random() * spanMs))
        .sort((a, b) => a - b)
        .map((date) => ({
            date,
            month: months[new Date(date).getMonth()],
            purchaseAmount: mn + Math.random() * (mx - mn) | 0
        }))
}

const monthReducer = (acc, { month, ...transaction }) => {
    const arr = acc[month] || []
    arr.push(transaction)
    acc[month] = arr
    return acc
}

const reduceTransactionByMonth = (transactions) => Array.from(Object.entries(transactions.reduce(monthReducer, {})))

export const getStartDate = (monthsAgo) => {
    const startDate = new Date()
    startDate.setMonth(startDate.getMonth() - Math.max(monthsAgo, 1) + 1)
    startDate.setDate(1)
    startDate.setHours(0, 0, 0, 0)
    return startDate
}

export const calcScore = (price) => {
    if (price < 50) return 0
    if (price < 100) return price - 50
    return (price - 100) * 2 + 50
}

export const getTransactionsSince = async (startDate) => reduceTransactionByMonth(generateData(startDate))