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
