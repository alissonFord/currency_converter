import { countExchangeAmount } from './lib.js';
import { formatCurrency } from './utils.js';
import { selectFrom, selectTo, amountToExchange, exchangedAmount } from './elements.js';

export async function handleInput(e) {
    console.log(e.currentTarget);
    console.log(e.target);
    const exchange = await countExchangeAmount(
      selectFrom.value,
      selectTo.value,
      amountToExchange.value
    )
    exchangedAmount.textContent = formatCurrency(selectTo.value, exchange);
}