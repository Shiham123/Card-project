const cardOneTextEl = document.getElementById('cardOne').innerText,
  cardTwoTextEl = document.getElementById('cardTwo').innerText,
  cardThreeTextEl = document.getElementById('cardThree').innerText,
  cardFourTextEl = document.getElementById('cardFour').innerText,
  cardFiveTextEl = document.getElementById('cardFive').innerText,
  cardSixEl = document.getElementById('cardSix').innerText,
  cardSevenTextEl = document.getElementById('cardSeven').innerText,
  cardEightTextEl = document.getElementById('cardEight').innerText,
  cardNineTextEl = document.getElementById('cardNine').innerText;

const amountOneEl = document.getElementById('amountOne').textContent,
  amountTwoEl = document.getElementById('amountTwo').textContent,
  amountThreeEl = document.getElementById('amountThree').textContent,
  amountFourEl = document.getElementById('amountFour').textContent,
  amountFiveEl = document.getElementById('amountFive').textContent,
  amountSixEl = document.getElementById('amountSix').textContent,
  amountSevenEl = document.getElementById('amountSeven').textContent,
  amountEightEl = document.getElementById('amountEight').textContent,
  amountNineEl = document.getElementById('amountNine').textContent;

const finalAmountEl = document.getElementById('finalAmount'),
  discountAmountEl = document.getElementById('discountAmount'),
  totalAmountEl = document.getElementById('totalAmount');

const ulListItem = document.getElementById('listItem');

const purchaseBtnEl = document.getElementById('purchase-btn'),
  couponBtnEl = document.getElementById('coupon-btn'),
  inputEl = document.getElementById('input');

/*
 * upper all are document element are called
 */

let sumOfAllPrice = 0;

function addToList(textEl) {
  const list = document.createElement('li');
  list.textContent = textEl;
  ulListItem.appendChild(list);
}

function allPrice(value) {
  let price = parseInt(value);
  sumOfAllPrice += price;
  return sumOfAllPrice;
}

function clearAll() {
  location.reload();
}

/*
 * and upper some of important function that handle the all onClick method
 * ! below all onclick function a called from html file
 */

function updateCard(cardText, amount) {
  addToList(cardText);
  allPrice(amount);
  buttonUpdate();
  couponAndInput();
  totalAmountEl.innerText = `${sumOfAllPrice}.00 TK`;
}

function cardOne() {
  updateCard(cardOneTextEl, amountOneEl);
}

function cardTwo() {
  updateCard(cardTwoTextEl, amountTwoEl);
}

function cardThree() {
  updateCard(cardThreeTextEl, amountThreeEl);
}

function cardFour() {
  updateCard(cardFourTextEl, amountFourEl);
}

function cardFive() {
  updateCard(cardFiveTextEl, amountFiveEl);
}

function cardSix() {
  updateCard(cardSixEl, amountSixEl);
}

function cardSeven() {
  updateCard(cardSevenTextEl, amountSevenEl);
}

function cardEight() {
  updateCard(cardEightTextEl, amountEightEl);
}
function cardNine() {
  updateCard(cardNineTextEl, amountNineEl);
}

// this is some other function

function buttonUpdate() {
  if (sumOfAllPrice > 0) {
    purchaseBtnEl.disabled = false;
  } else {
    purchaseBtnEl.disabled = true;
  }
}

function updateDiscount(value) {
  let discount = value * 0.2;
  discountAmountEl.innerText = `${discount.toFixed(2)} Tk`;

  let discountTotal = value - discount;
  finalAmountEl.innerText = `${discountTotal.toFixed(2)} TK`;

  return { discount, discountTotal };
}

function appCouponCode() {
  couponBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    const { discount, discountTotal } = updateDiscount(sumOfAllPrice);
    return { discount, discountTotal };
  });
}

// clear all value

function couponAndInput() {
  if (sumOfAllPrice >= 200) {
    couponBtnEl.disabled = false;
    couponBtnEl.addEventListener('click', (event) => event.preventDefault());

    if (inputEl.value === 'SELL200') {
      appCouponCode();
    }
  } else {
    couponBtnEl.disabled = true;
  }
}

inputEl.addEventListener('input', () => {
  couponAndInput();
});

couponAndInput();
