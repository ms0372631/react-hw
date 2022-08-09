import React, { useState, useEffect, useContext } from 'react';
import { calcScore } from './API';

export const Points = ({ transactions }) => {
    const [totals, setTotals] = useState({ score: 0, moneySpent: 0 })
    const { moneySpent, score } = totals

    useEffect(() => {
        const totals = transactions.reduce(({ score, moneySpent }, { purchaseAmount }) => {
            moneySpent += purchaseAmount
            score += calcScore(purchaseAmount)
            return { score, moneySpent }
        }, { score: 0, moneySpent: 0 })

        setTotals(totals)
    }, [transactions])

    return (
        <div>
            <div>
                <div>
                    <p>Purchase Total: </p>
                    <span>{moneySpent}</span>
                </div>
                <div>
                    <p>Points Earned: </p>
                    <span>{score}</span>
                </div>
            </div>
        </div>
    )
}