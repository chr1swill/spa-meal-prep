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
);

const PROTEIN_PER_GRAM_TOP_SIRLOIN: number = 0.27;
const PROTEIN_PER_GRAM_CHICKEN_BREAST: number = 0.32;

const selectButtons: HTMLButtonElement[] = [
  selectTopSirloin,
  selectChickenBreast,
  selectOther,
];

let numberOfDays: number = 0;

incrementorInput.value = numberOfDays.toString();

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

function strToArr(string: string): string[] {
  const trimmedStr = string.trim();
  return trimmedStr.split(/[ ,]+/);
}

function arrOfStrToNums(array: string[]) {
  const arrOfNums = array.forEach((number) => {
    parseInt(number);
  });
  return arrOfNums;
}

function arrayTotal(array: number[]) {
  let total: number = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
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
    const error = createErrorMsg(
      "Error: A selection needs to be made to continue."
    );
    confirmMeatPage.insertAdjacentElement("afterend", error);
    console.error("Error: A selection needs to be made to continue.");
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
  const errorMsg = document.querySelector(".error-msg");
  errorMsg?.remove();
});

confirmQuantityPage.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputMeatQuantity.value == null) {
    const error = createErrorMsg(
      "Error: Input can not be null, add a quantity of meat"
    );
    confirmQuantityPage.insertAdjacentElement("afterend", error);
    console.error("Error: Input can not be null, add a quantity of meat");
  } else if (!/[0-9]/.test(inputMeatQuantity.value)) {
    const error = createErrorMsg(
      "Error: Input need to contain numbers, add the number of grams of meat"
    );
    confirmQuantityPage.insertAdjacentElement("afterend", error);
    console.error(
      "Error: Input need to contain numbers, add the number of grams of meat"
    );
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
