import React, { useState, useEffect } from 'react';

import { getTransactionsSince, getStartDate } from './API';
import { Points } from './Points';

export const MonthlyPoints = ({ count }) => {
    const [months, setMonths] = useState([])

    useEffect(() => {
        getTransactionsSince(getStartDate(count)).then(setMonths)
    }, [count])

    return (
        <>
          {months.map(([month, transactions]) =>
              <Points title={month} transactions={transactions} key={month} />
          )}
        </>
    )
}