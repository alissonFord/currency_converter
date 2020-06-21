export function generateOptions(options) {
    return Object.entries(options).map(([currencySymbol, currencyName]) =>
      `<option value="${currencySymbol}">${currencySymbol} - ${currencyName}</option>`
    )
    .join('');
}

export function formatCurrency(currency, amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    })
    .format(amount);
}
