const endpoint = 'https://api.exchangeratesapi.io/latest';
const exchangeForm = document.querySelector('form');
const selectFrom = document.querySelector(`[name="from_currency"]`);
const selectTo =document.querySelector(`[name="to_currency"]`);
const amountToExchange = document.querySelector(`[name="from_amount"]`);
const exchangedAmount = document.querySelector('.to_amount');

const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
  };


  function generateOptions(options) {
    return Object.entries(options).map(([currencySymbol, currencyName]) =>
      `<option value="${currencySymbol}">${currencySymbol} - ${currencyName}</option>`
    )
    .join('');
  }

  selectFrom.innerHTML = generateOptions(currencies);
  selectTo.innerHTML = generateOptions(currencies);

  async function fetchExchangeRate(base) {
    const query = `${endpoint}?base=${base}`;
    const result = await fetch(query);
    const rate = await result.json();
    return rate;
  }

  async function countExchangeAmount(from, to, amount) {
    const { rates } = await fetchExchangeRate(from);
    const result = rates[to] * amount;
    console.log(result);
    return result;
  }

  async function handleInput(e) {
    console.log(e.currentTarget);
    console.log(e.target);
    const exchange = await countExchangeAmount(
      selectFrom.value,
      selectTo.value,
      amountToExchange.value
    )
    exchangedAmount.textContent = exchange;
  }

  exchangeForm.addEventListener('input', handleInput);

