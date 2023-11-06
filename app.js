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
const incrementorInputDays = document.querySelector("#pageSelectDays [data-input-incrementor]");
const incrementorBtnMinusDays = document.querySelector('#pageSelectDays [data-button-incrementor="left"]');
const incrementorBtnPlusDays = document.querySelector('#pageSelectDays [data-button-incrementor="right"]');
const incrementorInputResult = document.querySelector("#pageTotalResult [data-input-incrementor]");
const incrementorBtnMinusResult = document.querySelector('#pageTotalResult [data-button-incrementor="left"]');
const incrementorBtnPlusResult = document.querySelector('#pageTotalResult [data-button-incrementor="right"]');
const PROTEIN_PER_GRAM_TOP_SIRLOIN = 0.27;
const PROTEIN_PER_GRAM_CHICKEN_BREAST = 0.32;
const selectButtons = [
    selectTopSirloin,
    selectChickenBreast,
    selectOther,
];
let numberOfDays = 0;
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
function insertErrorMsg(createdErrorMsg, where) {
    const errorInDom = document.querySelector(".error-msg");
    if (!errorInDom) {
        where.insertAdjacentElement("afterend", createdErrorMsg);
    }
}
function strToArr(string) {
    const trimmedStr = string.trim();
    return trimmedStr.split(/[ ,]+/);
}
function arrOfStrToNums(array) {
    const arrOfNums = [];
    for (let i = 0; i < array.length; i++) {
        arrOfNums.push(parseInt(array[i]));
    }
    return arrOfNums;
}
function arrayTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
function sumOfStringArray(string) {
    const arrayOfStrings = strToArr(string);
    const arrayOfNumbers = arrOfStrToNums(arrayOfStrings);
    return arrayTotal(arrayOfNumbers);
}
function amountPerDay(amount, days) {
    return amount / days;
}
function updateInputValue(input) {
    var _a;
    if (input) {
        input.value = numberOfDays.toString();
    }
    if (numberOfDays > 0) {
        (_a = document.querySelector(".error-msg")) === null || _a === void 0 ? void 0 : _a.remove();
    }
}
function displayResultsInCardExpectProteinDaily(totalMeat, totalDays, meatDaily) {
    resultTotalMeat.innerText = totalMeat.toString();
    resultTotalDays.innerText = totalDays.toString();
    resultMeatDaily.innerText = meatDaily.toString();
}
function promptUserForProteinPerGram(meatDaily) {
    let userSelectProteinPerGram;
    while (isNaN(Number(userSelectProteinPerGram))) {
        userSelectProteinPerGram = prompt("Please enter the protein per a gram in you meat");
        if (isNaN(Number(userSelectProteinPerGram))) {
            console.error("Provided input is NaN, value needs to be a number");
        }
    }
    resultProteinDaily.innerText = (meatDaily * Number(userSelectProteinPerGram)).toString();
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
        const error = "Error: A selection needs to be made to continue.";
        const createdError = createErrorMsg(error);
        insertErrorMsg(createdError, confirmMeatPage);
        console.error(error);
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
    var _a;
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
    (_a = document.querySelector(".error-msg")) === null || _a === void 0 ? void 0 : _a.remove();
});
confirmQuantityPage.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputMeatQuantity.value == null) {
        const error = "Error: Input can not be null, add a quantity of meat";
        const createdError = createErrorMsg(error);
        insertErrorMsg(createdError, confirmQuantityPage);
        console.error(error);
    }
    else if (!/[0-9]/.test(inputMeatQuantity.value)) {
        const error = "Error: Input need to contain numbers, add the number of grams of meat";
        const createdError = createErrorMsg(error);
        insertErrorMsg(createdError, confirmQuantityPage);
        console.error(error);
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
incrementorBtnPlusDays === null || incrementorBtnPlusDays === void 0 ? void 0 : incrementorBtnPlusDays.addEventListener("click", (e) => {
    e.preventDefault();
    daysPlusOne();
    updateInputValue(incrementorInputDays);
});
incrementorBtnMinusDays === null || incrementorBtnMinusDays === void 0 ? void 0 : incrementorBtnMinusDays.addEventListener("click", (e) => {
    e.preventDefault();
    daysMinusOne();
    updateInputValue(incrementorInputDays);
});
incrementorInputDays === null || incrementorInputDays === void 0 ? void 0 : incrementorInputDays.addEventListener("input", (e) => {
    var _a;
    const target = e.target;
    const inputValue = parseInt(target.value);
    if (!isNaN(inputValue)) {
        (_a = document.querySelector(".error-msg")) === null || _a === void 0 ? void 0 : _a.remove();
        numberOfDays = inputValue;
    }
});
incrementorBtnPlusResult === null || incrementorBtnPlusResult === void 0 ? void 0 : incrementorBtnPlusResult.addEventListener("click", (e) => {
    e.preventDefault();
    daysPlusOne();
    updateInputValue(incrementorInputResult);
});
incrementorBtnMinusResult === null || incrementorBtnMinusResult === void 0 ? void 0 : incrementorBtnMinusResult.addEventListener("click", (e) => {
    e.preventDefault();
    daysMinusOne();
    updateInputValue(incrementorInputResult);
});
incrementorInputResult === null || incrementorInputResult === void 0 ? void 0 : incrementorInputResult.addEventListener("input", (e) => {
    var _a;
    const target = e.target;
    const inputValue = parseInt(target.value);
    if (!isNaN(inputValue)) {
        (_a = document.querySelector(".error-msg")) === null || _a === void 0 ? void 0 : _a.remove();
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
    }
    else {
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
                resultProteinDaily.innerText = (meatDaily * PROTEIN_PER_GRAM_TOP_SIRLOIN).toString();
            }
            else if (selectedMeat == selectChickenBreast) {
                resultProteinDaily.innerText = (meatDaily * PROTEIN_PER_GRAM_CHICKEN_BREAST).toString();
            }
            else {
                let userSelectProteinPerGram;
                while (isNaN(Number(userSelectProteinPerGram))) {
                    userSelectProteinPerGram = prompt("Please enter the protein per a gram in you meat");
                    if (isNaN(Number(userSelectProteinPerGram))) {
                        console.error("Provided input is NaN, value needs to be a number");
                    }
                }
                resultProteinDaily.innerText = (meatDaily * Number(userSelectProteinPerGram)).toString();
            }
        }
        else {
            console.error("Error: No meat selection was made.");
        }
    }
});
