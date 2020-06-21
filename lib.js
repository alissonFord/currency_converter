export const endpoint = 'https://api.exchangeratesapi.io/latest';

export async function fetchExchangeRate(base) {
    const query = `${endpoint}?base=${base}`;
    const result = await fetch(query);
    const rate = await result.json();
    return rate;
}

export async function countExchangeAmount(from, to, amount) {
    const { rates } = await fetchExchangeRate(from);
    const result = rates[to] * amount;
    console.log(result);
    return result;
}
