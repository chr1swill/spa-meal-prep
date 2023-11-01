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

selectButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (button.classList.contains("selected")) {
      button.classList.remove("selected");
    } else if (!button.classList.contains("selected")) {
      selectButtons.forEach((select) => {
        if (select.classList.contains("selected")) {
          select.classList.remove("selected");
        }
      });
      button.classList.add("selected");
    }
  });
});
// *next step is to confirm select change array selectButtons into a array of object button: "element" and proteinPerGram: "value"
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
    alert("Error: A selection need to be made to continue.");
  } else {
    // logic to go to next pageSelectMeat
    pageHidePageShow(pageSelectMeat, pageSelectQuantity);
  }
});
