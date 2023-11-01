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
// *next step is to confirm select change array selectButtons into a array of object button: "element" and proteinPerGram: "value"
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
        // alert("Error: A selection needs to be made to continue.");
        var error = createErrorMsg("Error: A selection needs to be made to continue.");
        confirmMeatPage.insertAdjacentElement("afterend", error);
        console.error("Error: A selection needs to be made to continue.");
    }
    else {
        // logic to go to next pageSelectMeat
        pageHidePageShow(pageSelectMeat, pageSelectQuantity);
    }
});
