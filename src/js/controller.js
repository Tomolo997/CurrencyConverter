import * as model from './model.js';
import renderValue from './views/basicView.js';
const selectDivTo = document.querySelector('.converter__option_to');
const selectDivFrom = document.querySelector('.converter__option_from');
const controlApi = async function () {
  try {
    const data = await model.loadApi();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayCurrencyConverter = async function () {
  try {
    const data = await controlApi();
    const ratesObject = data.rates;
    const amountFromDom = renderValue.getAmount();
    const fromCurrencyDOM = renderValue.getFromCurrency();
    const toCurrencyDOM = renderValue.getToCurrency();
    const finalValue =
      amountFromDom *
      (1 / data.rates[`${fromCurrencyDOM}`]) *
      data.rates[`${toCurrencyDOM}`];
    renderValue.renderFinal(
      finalValue,
      fromCurrencyDOM,
      toCurrencyDOM,
      amountFromDom
    );
    renderValue.clearInput();
    console.log(finalValue);
  } catch (error) {
    console.log(error);
  }
};

const addOptions = async function () {
  const data = await controlApi();
  console.log(data.rates);
  const keys = Object.keys(data.rates);
  for (let i = 0; i < 168; i++) {
    let element = document.createElement('option');
    let element2 = document.createElement('option');
    element.textContent = keys[i];
    element2.textContent = keys[i];
    element.setAttribute('value', keys[i]);
    element2.setAttribute('value', keys[i]);
    selectDivTo.appendChild(element);
    selectDivFrom.appendChild(element2);
  }
};
addOptions();
const init = function () {
  //kda kliknemo na submit se zažene controlAPI
  renderValue.addHandlerValueSubmit(controlApi);
  renderValue.addHandlerValueSubmit(displayCurrencyConverter);
};
init();
