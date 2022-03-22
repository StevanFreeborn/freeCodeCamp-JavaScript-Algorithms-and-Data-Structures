function checkCashRegister(price, cash, cid) {
    const table = {
        'ONE HUNDRED': 10000,
        TWENTY: 2000,
        TEN: 1000,
        FIVE: 500,
        ONE: 100,
        QUARTER: 25,
        DIME: 10,
        NICKEL: 5,
        PENNY: 1,
    };

    let changeDue = Math.round(cash * 100) - Math.round(price * 100);
    let cidTotal = cid.reduce((sum, i) => Math.round(sum += (i[1] * 100)), 0);

    if (cidTotal < changeDue) return { status: "INSUFFICIENT_FUNDS", change: [] };
    if (cidTotal == changeDue) return { status: "CLOSED", change: cid };

    let change = [];

    cid
        .map(i => [i[0], Math.round(i[1] * 100)])
        .reverse()
        .forEach(i => {
            let changeAmount = 0;
            let denomName = i[0];
            let denomValue = table[denomName];
            let cidValue = i[1];
            while (changeDue >= denomValue && cidValue > 0)
            {
                cidValue -= denomValue;
                changeAmount += denomValue;
                changeDue -= denomValue;
            }
            if (changeAmount > 0)
                change.push([denomName, changeAmount / 100])
        });

    return (change.reduce((sum, i) => sum += (i[1] * 100), 0) < changeDue) ?
        { status: "INSUFFICIENT_FUNDS", change: [] } :
        { status: "OPEN", change: change };
}
