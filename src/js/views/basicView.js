const amount = document.querySelector('.converter__amount');
const fromCurrency = document.querySelector('.converter__option_from');
const toCurrency = document.querySelector('.converter__option_to');
const submit = document.querySelector('.converter__submit');
const displayYourCurrency = document.querySelector('.yourCurrency');
const displayMyCurrency = document.querySelector('.myCurrency');

class renderValue {
  addHandlerValueSubmit(handler) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();

      handler();
    });
  }
  getAmount() {
    const amountFromDOM = amount.value;
    return amountFromDOM;
  }
  getFromCurrency() {
    const fromCurrencyDOM = fromCurrency.value;
    return fromCurrencyDOM;
  }
  getToCurrency() {
    const toCurrencyDOM = toCurrency.value;
    return toCurrencyDOM;
  }

  renderFinal(data, myCur, yourCur, amount) {
    displayMyCurrency.textContent = `${amount} ${myCur} `;
    displayYourCurrency.textContent = `${data.toFixed(2)} ${yourCur} `;
  }

  clearInput() {
    amount.value = '';
  }
}

export default new renderValue();
