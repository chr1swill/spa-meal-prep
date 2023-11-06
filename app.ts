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
const incrementorInputDays: HTMLInputElement | null = document.querySelector(
  "#pageSelectDays [data-input-incrementor]"
);
const incrementorBtnMinusDays: HTMLButtonElement | null =
  document.querySelector('#pageSelectDays [data-button-incrementor="left"]');
const incrementorBtnPlusDays: HTMLButtonElement | null = document.querySelector(
  '#pageSelectDays [data-button-incrementor="right"]'
);

const incrementorInputResult: HTMLInputElement | null = document.querySelector(
  "#pageTotalResult [data-input-incrementor]"
);
const incrementorBtnMinusResult: HTMLButtonElement | null =
  document.querySelector('#pageTotalResult [data-button-incrementor="left"]');
const incrementorBtnPlusResult: HTMLButtonElement | null =
  document.querySelector('#pageTotalResult [data-button-incrementor="right"]');

const PROTEIN_PER_GRAM_TOP_SIRLOIN: number = 0.27;
const PROTEIN_PER_GRAM_CHICKEN_BREAST: number = 0.32;

const selectButtons: HTMLButtonElement[] = [
  selectTopSirloin,
  selectChickenBreast,
  selectOther,
];

let numberOfDays: number = 0;

function getNumberOfDays(): number {
  return numberOfDays;
}

function setNumberOfDays(amountOfDays: number): void {
  numberOfDays = amountOfDays;
}

function daysPlusOne(): void {
  numberOfDays++;
}

function daysMinusOne(): void {
  numberOfDays--;
}

function setPageHidden(page: HTMLElement): void {
  page.style.display = "none";
  page.setAttribute("aria-hidden", "true");
}

function setPageVisible(page: HTMLElement): void {
  page.style.display = "block";
  page.setAttribute("aria-hidden", "false");
}

function pageHidePageShow(
  pageToHide: HTMLElement,
  pageToShow: HTMLElement
): void {
  setPageHidden(pageToHide);
  setPageVisible(pageToShow);
}

function createErrorMsg(text: string): HTMLElement {
  const errorMsg = document.createElement("div");
  errorMsg.innerText = text;
  errorMsg.className = "error-msg";
  return errorMsg;
}

function insertErrorMsg(
  createdErrorMsg: HTMLElement,
  where: HTMLElement
): void {
  const errorInDom = document.querySelector(".error-msg");
  if (!errorInDom) {
    where.insertAdjacentElement("afterend", createdErrorMsg);
  }
}

function strToArr(string: string): string[] {
  const trimmedStr = string.trim();
  return trimmedStr.split(/[ ,]+/);
}

function arrOfStrToNums(array: string[]): number[] {
  const arrOfNums = [];
  for (let i = 0; i < array.length; i++) {
    arrOfNums.push(parseInt(array[i]));
  }
  return arrOfNums;
}

function arrayTotal(array: number[]) {
  let total: number = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function sumOfStringArray(string: string): number {
  const arrayOfStrings = strToArr(string);
  const arrayOfNumbers = arrOfStrToNums(arrayOfStrings);
  return arrayTotal(arrayOfNumbers);
}

function amountPerDay(amount: number, days: number): number {
  return amount / days;
}

function updateInputValue(input: HTMLInputElement | null): void {
  if (input) {
    input.value = numberOfDays.toString();
  }
  if (numberOfDays > 0) {
    document.querySelector(".error-msg")?.remove();
  }
}

function displayResultsInCardExpectProteinDaily(
  totalMeat: number,
  totalDays: number,
  meatDaily: number
): void {
  resultTotalMeat.innerText = totalMeat.toString();
  resultTotalDays.innerText = totalDays.toString();
  resultMeatDaily.innerText = meatDaily.toString();
}

function promptUserForProteinPerGram(meatDaily: number): void {
  let userSelectProteinPerGram;

  while (isNaN(Number(userSelectProteinPerGram))) {
    userSelectProteinPerGram = prompt(
      "Please enter the protein per a gram in you meat"
    );
    if (isNaN(Number(userSelectProteinPerGram))) {
      console.error("Provided input is NaN, value needs to be a number");
    }
  }
  resultProteinDaily.innerText = (
    meatDaily * Number(userSelectProteinPerGram)
  ).toString();
}

selectButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (button.classList.contains("selected")) {
      button.classList.remove("selected");
    } else if (!button.classList.contains("selected")) {
      const errorMsg = document.querySelector(".error-msg");
      errorMsg?.remove();
      selectButtons.forEach((select) => {
        if (select.classList.contains("selected")) {
          select.classList.remove("selected");
        }
      });
      button.classList.add("selected");
    }
  });
});

confirmMeatPage.addEventListener("click", (e) => {
  e.preventDefault();
  let chosenButton;
  for (let button of selectButtons) {
    if (button.classList.contains("selected")) {
      chosenButton = button;
      break;
    }
  }
  if (!chosenButton) {
    const error = "Error: A selection needs to be made to continue.";
    const createdError = createErrorMsg(error);
    insertErrorMsg(createdError, confirmMeatPage);
    console.error(error);
  } else {
    pageHidePageShow(pageSelectMeat, pageSelectQuantity);
  }
});

inputMeatQuantity.addEventListener("keypress", function (event) {
  const key = event.key;
  const regex = /[0-9 ,]/;
  if (!regex.test(key)) {
    event.preventDefault();
  }
});

inputMeatQuantity.addEventListener("paste", function (event) {
  const pasteData = event.clipboardData || (window as any).clipboardData;
  const pastedText = pasteData.getData("text");
  const regex = /^[0-9 ,]*$/;
  if (!regex.test(pastedText)) {
    event.preventDefault();
  }
});

inputMeatQuantity.addEventListener("input", function (e) {
  e.preventDefault();
  const inputLabel = document.querySelector(
    "#labelForMeatQuantity"
  ) as HTMLElement;
  if (this.value.length > 0) {
    inputLabel.style.top = "2px";
    inputLabel.style.fontSize = "10px";
  } else {
    inputLabel.style.top =
      "calc((var(--input-container-height) - var(--TEXT_BOX_HEIGHT)) / 2)";
    inputLabel.style.fontSize = "18px";
  }
  document.querySelector(".error-msg")?.remove();
});

confirmQuantityPage.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputMeatQuantity.value == null) {
    const error = "Error: Input can not be null, add a quantity of meat";
    const createdError = createErrorMsg(error);
    insertErrorMsg(createdError, confirmQuantityPage);
    console.error(error);
  } else if (!/[0-9]/.test(inputMeatQuantity.value)) {
    const error =
      "Error: Input need to contain numbers, add the number of grams of meat";
    const createdError = createErrorMsg(error);
    insertErrorMsg(createdError, confirmQuantityPage);
    console.error(error);
  } else {
    pageHidePageShow(pageSelectQuantity, pageSelectDays);
  }
});

backBtnOnQuantity.addEventListener("click", (e) => {
  e.preventDefault();
  pageHidePageShow(pageSelectQuantity, pageSelectMeat);
});

backBtnOnDays.addEventListener("click", (e) => {
  e.preventDefault();
  pageHidePageShow(pageSelectDays, pageSelectQuantity);
});

backBtnOnResult.addEventListener("click", (e) => {
  e.preventDefault();
  pageHidePageShow(pageTotalResult, pageSelectDays);
});

incrementorBtnPlusDays?.addEventListener("click", (e) => {
  e.preventDefault();
  daysPlusOne();
  updateInputValue(incrementorInputDays);
});

incrementorBtnMinusDays?.addEventListener("click", (e) => {
  e.preventDefault();
  daysMinusOne();
  updateInputValue(incrementorInputDays);
});

incrementorInputDays?.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  const inputValue = parseInt(target.value);
  if (!isNaN(inputValue)) {
    document.querySelector(".error-msg")?.remove();
    numberOfDays = inputValue;
  }
});

incrementorBtnPlusResult?.addEventListener("click", (e) => {
  e.preventDefault();
  daysPlusOne();
  updateInputValue(incrementorInputResult);
});

incrementorBtnMinusResult?.addEventListener("click", (e) => {
  e.preventDefault();
  daysMinusOne();
  updateInputValue(incrementorInputResult);
});

incrementorInputResult?.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  const inputValue = parseInt(target.value);
  if (!isNaN(inputValue)) {
    document.querySelector(".error-msg")?.remove();
    numberOfDays = inputValue;
  }
});

confirmDaysPage.addEventListener("click", (e) => {
  e.preventDefault();
  if (numberOfDays <= 0) {
    const error = "Error: Value of days needs to be a number greater than zero";
    const createdError = createErrorMsg(error);
    insertErrorMsg(createdError, confirmDaysPage);
    console.error(error);
  } else {
    pageHidePageShow(pageSelectDays, pageTotalResult);
    const totalMeat = sumOfStringArray(inputMeatQuantity.value);
    const totalDays = numberOfDays.toString();
    const meatDaily = amountPerDay(totalMeat, numberOfDays);
    const selectedMeat = document.querySelector(".selected");

    displayResultsInCardExpectProteinDaily(totalMeat, numberOfDays, meatDaily);
    if (incrementorInputResult) {
      incrementorInputResult.value = totalDays;
    }

    if (selectedMeat) {
      if (selectedMeat == selectTopSirloin) {
        resultProteinDaily.innerText = (
          meatDaily * PROTEIN_PER_GRAM_TOP_SIRLOIN
        ).toString();
      } else if (selectedMeat == selectChickenBreast) {
        resultProteinDaily.innerText = (
          meatDaily * PROTEIN_PER_GRAM_CHICKEN_BREAST
        ).toString();
      } else {
        let userSelectProteinPerGram;

        while (isNaN(Number(userSelectProteinPerGram))) {
          userSelectProteinPerGram = prompt(
            "Please enter the protein per a gram in you meat"
          );
          if (isNaN(Number(userSelectProteinPerGram))) {
            console.error("Provided input is NaN, value needs to be a number");
          }
        }
        resultProteinDaily.innerText = (
          meatDaily * Number(userSelectProteinPerGram)
        ).toString();
      }
    } else {
      console.error("Error: No meat selection was made.");
    }
  }
});
