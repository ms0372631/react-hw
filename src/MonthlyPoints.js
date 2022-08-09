import React, { useState, useEffect } from 'react';


import { getTransactions, getStartDate } from './api';
import { PointCard } from './ScoreCard';

export const MonthlyScores = ({ count }) => {
    const [months, setMonths] = useState([])
    const classes = useClasses()

    useEffect(() => {
        getTransactionsSince(getStartDate(count)).then(setMonths)
    }, [count])

    return (
        <div className={classes.container}>
            {months.map(([month, transactions]) =>
                <ScoreCard title={month} transactions={transactions} key={month} />
            )}
        </div>
    )
}