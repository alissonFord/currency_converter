import { generateOptions } from './utils.js';
import { handleInput } from './handler.js';
import { selectFrom, selectTo, exchangeForm } from './elements.js'; 
import currencies from './currencies.js';

export function init() {
    selectFrom.innerHTML = generateOptions(currencies);
    selectTo.innerHTML = generateOptions(currencies);
    exchangeForm.addEventListener('input', handleInput);
}