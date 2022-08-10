import React, { useState, useEffect } from 'react';

import { getTransactionsSince, getStartDate } from './API';
import { Points } from './Points';

export const MonthlyPoints = ({ count }) => {
    const [months, setMonths] = useState([])

    useEffect(() => {
        getTransactionsSince(getStartDate(count)).then(res => setMonths(res))
    }, [count])

    return (
        <>
          {months.map(([month, transactions]) =>
              <Points key={month} month={month} transactions={transactions} />
          )}
        </>
    )
}