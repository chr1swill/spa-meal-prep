"use strict";
const pageSelectMeat = document.querySelector("#pageSelectMeat");
const selectTopSirloin = document.querySelector('[data-button-select="top-sirloin"]');
const selectChickenBreast = document.querySelector('[data-button-select="chicken-breast"]');
const selectOther = document.querySelector('[data-button-select="other"]');
const confirmMeatPage = document.querySelector('[data-button-confirm="pageMeat"]');
const pageSelectQuantity = document.querySelector("#pageSelectQuantity");
const inputMeatQuantity = document.querySelector("#inputMeatQuantity");
const confirmQuantityPage = document.querySelector('[data-button-confirm="pageQuantity"]');
const backBtnOnQuantity = document.querySelector('[data-back-button="pageQuantity"]');
const pageSelectDays = document.querySelector("#pageSelectDays");
const confirmDaysPage = document.querySelector('[data-button-confirm="pageDays"]');
const backBtnOnDays = document.querySelector('[data-back-button="pageDays"]');
const pageTotalResult = document.querySelector("#pageTotalResult");
const resultTotalMeat = document.querySelector("#resultTotalMeat");
const resultTotalDays = document.querySelector("#resultTotalDays");
const resultProteinDaily = document.querySelector("#resultProteinDaily");
const resultMeatDaily = document.querySelector("#resultMeatDaily");
const confirmResultPage = document.querySelector('[data-button-confirm="pageResult"]');
const backBtnOnResult = document.querySelector('[data-back-button="pageResult"]');
// selector for the incrementor
const incrementorInput = document.querySelector("[data-input-incrementor]");
const incrementorBtnMinus = document.querySelector('[data-button-incrementor="left"]');
const incrementorBtnPlus = document.querySelector('[data-button-incrementor="right"]');
const PROTEIN_PER_GRAM_TOP_SIRLOIN = 0.27;
const PROTEIN_PER_GRAM_CHICKEN_BREAST = 0.32;
const selectButtons = [
    selectTopSirloin,
    selectChickenBreast,
    selectOther,
];
let numberOfDays = 0;
incrementorInput.value = numberOfDays.toString();
function getNumberOfDays() {
    return numberOfDays;
}
function setNumberOfDays(amountOfDays) {
    numberOfDays = amountOfDays;
}
function daysPlusOne() {
    numberOfDays++;
}
function daysMinusOne() {
    numberOfDays--;
}
function setPageHidden(page) {
    page.style.display = "none";
    page.setAttribute("aria-hidden", "true");
}
function setPageVisible(page) {
    page.style.display = "block";
    page.setAttribute("aria-hidden", "false");
}
function pageHidePageShow(pageToHide, pageToShow) {
    setPageHidden(pageToHide);
    setPageVisible(pageToShow);
}
function createErrorMsg(text) {
    const errorMsg = document.createElement("div");
    errorMsg.innerText = text;
    errorMsg.className = "error-msg";
    return errorMsg;
}
function strToArr(string) {
    const trimmedStr = string.trim();
    return trimmedStr.split(/[ ,]+/);
}
function arrOfStrToNums(array) {
    const arrOfNums = array.forEach((number) => {
        parseInt(number);
    });
    return arrOfNums;
}
function arrayTotal(array) {
    let total = 0;
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
        }
        else if (!button.classList.contains("selected")) {
            const errorMsg = document.querySelector(".error-msg");
            errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.remove();
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
        const error = createErrorMsg("Error: A selection needs to be made to continue.");
        confirmMeatPage.insertAdjacentElement("afterend", error);
        console.error("Error: A selection needs to be made to continue.");
    }
    else {
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
    const pasteData = event.clipboardData || window.clipboardData;
    const pastedText = pasteData.getData("text");
    const regex = /^[0-9 ,]*$/;
    if (!regex.test(pastedText)) {
        event.preventDefault();
    }
});
inputMeatQuantity.addEventListener("input", function (e) {
    e.preventDefault();
    const inputLabel = document.querySelector("#labelForMeatQuantity");
    if (this.value.length > 0) {
        inputLabel.style.top = "2px";
        inputLabel.style.fontSize = "10px";
    }
    else {
        inputLabel.style.top =
            "calc((var(--input-container-height) - var(--TEXT_BOX_HEIGHT)) / 2)";
        inputLabel.style.fontSize = "18px";
    }
    const errorMsg = document.querySelector(".error-msg");
    errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.remove();
});
confirmQuantityPage.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputMeatQuantity.value == null) {
        const error = createErrorMsg("Error: Input can not be null, add a quantity of meat");
        confirmQuantityPage.insertAdjacentElement("afterend", error);
        console.error("Error: Input can not be null, add a quantity of meat");
    }
    else if (!/[0-9]/.test(inputMeatQuantity.value)) {
        const error = createErrorMsg("Error: Input need to contain numbers, add the number of grams of meat");
        confirmQuantityPage.insertAdjacentElement("afterend", error);
        console.error("Error: Input need to contain numbers, add the number of grams of meat");
    }
    else {
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
incrementorBtnPlus === null || incrementorBtnPlus === void 0 ? void 0 : incrementorBtnPlus.addEventListener("click", (e) => {
    e.preventDefault();
    daysPlusOne();
    incrementorInput.value = numberOfDays.toString();
});
incrementorBtnMinus === null || incrementorBtnMinus === void 0 ? void 0 : incrementorBtnMinus.addEventListener("click", (e) => {
    e.preventDefault();
    daysMinusOne();
    incrementorInput.value = numberOfDays.toString();
});
