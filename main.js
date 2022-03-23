// income inputs

const incomeSalaryInput = document.getElementById('income-salary'),
  incomeFreelanceInput = document.getElementById('income-freelance'),
  incomeExtraOne = document.getElementById('income-extra-1'),
  incomeExtraTwo = document.getElementById('income-extra-2');

// costs inputs

const costsFlatInput = document.getElementById('costs-flat'),
  costsServicesInput = document.getElementById('costs-house-services'),
  costsTransportsInput = document.getElementById('costs-transport'),
  costsCreditInput = document.getElementById('costs-credit');

// total inputs

const totalMonthInput = document.getElementById('total-month'),
  totalDayInput = document.getElementById('total-day'),
  totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

// range

const accumInp = document.getElementById('accumulation'),
  spendInp = document.getElementById('spend'),
  moneyBoxRange = document.getElementById('money-box-range'),
  totalPrecents = document.getElementById('total-precents');

// inputs

const inputs = document.querySelectorAll('.input');

for (let input of inputs) {
  input.addEventListener('input', () => {
    countingAvailableMoney();
    countingMoneyBox();
  });
}

const strToNum = (str) => {
  str.value ? parseInt(str.value) : 0;
};

const countingAvailableMoney = () => {
  let totalIncome =
    strToNum(incomeSalaryInput) +
    strToNum(incomeFreelanceInput) +
    strToNum(incomeExtraOne) +
    strToNum(incomeExtraTwo);
  let totalCosts =
    strToNum(costsFlatInput) +
    strToNum(costsServicesInput) +
    strToNum(costsTransportsInput) +
    strToNum(costsCreditInput);

  totalMonth = totalIncome - totalCosts;
  totalMonthInput.value = totalMonth;
};

moneyBoxRange.addEventListener('input', () => {
  totalPrecents.innerHTML = moneyBoxRange.value;
  countingMoneyBox();
});

let countingMoneyBox = () => {
  accumInp.value = (
    (totalMonthInput.value * moneyBoxRange.value) /
    100
  ).toFixed();
  spendInp.value = totalMonthInput.value - accumInp.value;
  totalDayInput.value = (spendInp.value / 30).toFixed();
  totalYearInput.value = (accumInp.value * 12).toFixed();
};
