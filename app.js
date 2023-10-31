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
var PROTEIN_PER_GRAM_MEAT;
var selectButtons = [
    selectTopSirloin,
    selectChickenBreast,
    selectOther,
];
selectButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        if (button.classList.contains("selected")) {
            button.classList.remove("selected");
        }
        else if (!button.classList.contains("selected")) {
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
        return;
    }
    else if (chosenButton == selectTopSirloin) {
        PROTEIN_PER_GRAM_MEAT = 0.27;
        // next page
    }
    else if (chosenButton == selectChickenBreast) {
        PROTEIN_PER_GRAM_MEAT = 0.32;
        //next page
    }
    else if (chosenButton == selectOther) {
        PROTEIN_PER_GRAM_MEAT = undefined;
        // page to manually assign protein per a gram (still need to be made)
    }
    console.log(PROTEIN_PER_GRAM_MEAT);
});
