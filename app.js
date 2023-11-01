var pageSelectMeat = document.querySelector("#pageSelectMeat");
var selectTopSirloin = document.querySelector('[data-button-select="top-sirloin"]');
var selectChickenBreast = document.querySelector('[data-button-select="chicken-breast"]');
var selectOther = document.querySelector('[data-button-select="other"]');
var confirmMeatPage = document.querySelector('[data-button-confirm="pageMeat"]');
var pageSelectQuantity = document.querySelector("#pageSelectQuantity");
var inputMeatQuantity = document.querySelector("#inputMeatQuantity");
var confirmQuantityPage = document.querySelector('[data-button-confirm="pageQuantity"]');
var backBtnOnQuantity = document.querySelector('[data-back-button="pageQuantity"]');
var pageSelectDays = document.querySelector("#pageSelectDays");
var confirmDaysPage = document.querySelector('[data-button-confirm="pageDays"]');
var backBtnOnDays = document.querySelector('[data-back-button="pageDays"]');
var pageTotalResult = document.querySelector("#pageTotalResult");
var resultTotalMeat = document.querySelector("#resultTotalMeat");
var resultTotalDays = document.querySelector("#resultTotalDays");
var resultProteinDaily = document.querySelector("#resultProteinDaily");
var resultMeatDaily = document.querySelector("#resultMeatDaily");
var confirmResultPage = document.querySelector('[data-button-confirm="pageResult"]');
var backBtnOnResult = document.querySelector('[data-back-button="pageResult"]');
// selector for the incrementor
var incrementorInput = document.querySelector("[data-input-incrementor]");
var incrementorBtnMinus = document.querySelector('[data-button-incrementor="left"]');
var incrementorBtnPlus = document.querySelector('[data-button-incrementor="right"]');
var PROTEIN_PER_GRAM_TOP_SIRLOIN = 0.27;
var PROTEIN_PER_GRAM_CHICKEN_BREAST = 0.32;
var selectButtons = [
    selectTopSirloin,
    selectChickenBreast,
    selectOther,
];
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
    var errorMsg = document.createElement("div");
    errorMsg.innerText = text;
    errorMsg.className = "error-msg";
    return errorMsg;
}
function strToArr(string) {
    var trimmedStr = string.trim();
    return trimmedStr.split(/[ ,]+/);
}
function arrOfStrToNums(array) {
    var arrOfNums = array.forEach(function (number) {
        parseInt(number);
    });
    return arrOfNums;
}
function arrayTotal(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
selectButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
        }
        else if (!button.classList.contains("selected")) {
            var errorMsg = document.querySelector(".error-msg");
            errorMsg === null || errorMsg === void 0 ? void 0 : errorMsg.remove();
            selectButtons.forEach(function (select) {
                if (select.classList.contains("selected")) {
                    select.classList.remove("selected");
                }
            });
            button.classList.add("selected");
        }
    });
});
confirmMeatPage.addEventListener("click", function (e) {
    e.preventDefault();
    var chosenButton;
    for (var _i = 0, selectButtons_1 = selectButtons; _i < selectButtons_1.length; _i++) {
        var button = selectButtons_1[_i];
        if (button.classList.contains("selected")) {
            chosenButton = button;
            break;
        }
    }
    if (!chosenButton) {
        var error = createErrorMsg("Error: A selection needs to be made to continue.");
        confirmMeatPage.insertAdjacentElement("afterend", error);
        console.error("Error: A selection needs to be made to continue.");
    }
    else {
        pageHidePageShow(pageSelectMeat, pageSelectQuantity);
    }
});
inputMeatQuantity.addEventListener("keypress", function (event) {
    var key = event.key;
    var regex = /[0-9 ,]/;
    if (!regex.test(key)) {
        event.preventDefault();
    }
});
inputMeatQuantity.addEventListener("paste", function (event) {
    var pasteData = event.clipboardData || window.clipboardData;
    var pastedText = pasteData.getData("text");
    var regex = /^[0-9 ,]*$/;
    if (!regex.test(pastedText)) {
        event.preventDefault();
    }
});
inputMeatQuantity.addEventListener("input", function (e) {
    e.preventDefault();
    var inputLabel = document.querySelector("#labelForMeatQuantity");
    if (this.value.length > 0) {
        inputLabel.style.top = "2px";
        inputLabel.style.fontSize = "10px";
    }
    else {
        inputLabel.style.top =
            "calc((var(--input-container-height) - var(--TEXT_BOX_HEIGHT)) / 2)";
        inputLabel.style.fontSize = "18px";
    }
});
confirmQuantityPage.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputMeatQuantity.value == null) {
        var error = createErrorMsg("Error: Input can not be null, add a quantity");
        confirmQuantityPage.insertAdjacentElement("afterend", error);
        console.error("Error: Input can not be null, add a quantity");
    }
    else {
    }
});
