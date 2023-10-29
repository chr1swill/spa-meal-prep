const pageSelectMeat = document.querySelector("#pageSelectMeat") as HTMLElement;
const selectTopSirloin = document.querySelector(
  '[data-button-select="top-sirloin"]'
) as HTMLButtonElement;
const selectChickenBreast = document.querySelector(
  '[data-button-select="chicken-breast"]'
) as HTMLButtonElement;
const selectOther = document.querySelector(
  '[data-button-select="other"]'
) as HTMLButtonElement;
const confirmMeatPage = document.querySelector(
  '[data-button-confirm="pageMeat"]'
) as HTMLButtonElement;

const pageSelectQuantity = document.querySelector(
  "#pageSelectQuantity"
) as HTMLElement;
const inputMeatQuantity = document.querySelector(
  "#inputMeatQuantity"
) as HTMLInputElement;
const confirmQuantityPage = document.querySelector(
  '[data-button-confirm="pageQuantity"]'
) as HTMLButtonElement;
const backBtnOnQuantity = document.querySelector(
  '[data-back-button="pageQuantity"]'
) as HTMLButtonElement;

const pageSelectDays = document.querySelector("#pageSelectDays") as HTMLElement;
const confirmDaysPage = document.querySelector(
  '[data-button-confirm="pageDays"]'
) as HTMLButtonElement;
const backBtnOnDays = document.querySelector(
  '[data-back-button="pageDays"]'
) as HTMLButtonElement;

const pageTotalResult = document.querySelector(
  "#pageTotalResult"
) as HTMLElement;
const resultTotalMeat = document.querySelector(
  "#resultTotalMeat"
) as HTMLElement;
const resultTotalDays = document.querySelector(
  "#resultTotalDays"
) as HTMLElement;
const resultProteinDaily = document.querySelector(
  "#resultProteinDaily"
) as HTMLElement;
const resultMeatDaily = document.querySelector(
  "#resultMeatDaily"
) as HTMLElement;
const confirmResultPage = document.querySelector(
  '[data-button-confirm="pageResult"]'
) as HTMLButtonElement;
const backBtnOnResult = document.querySelector(
  '[data-back-button="pageResult"]'
) as HTMLButtonElement;

// selector for the incrementor
const incrementorInput = document.querySelector(
  "[data-input-incrementor]"
) as HTMLInputElement;
const incrementorBtnMinus = document.querySelector(
  '[data-button-incrementor="left"]'
) as HTMLButtonElement;
const incrementorBtnPlus = document.querySelector(
  '[data-button-incrementor="right"]'
) as HTMLButtonElement;
