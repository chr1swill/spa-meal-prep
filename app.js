"use strict";
// PAGES
const pageSelectMeat = document.querySelector("#pageSelectMeat");
const selectTopSirlion = document.querySelector('[data-button-select="top-sirlion"]');
const selectChickenBreast = document.querySelector('[data-button-select="chicken-breast"]');
const selectOther = document.querySelector('[data-button-select="other"]');
const confirmMeatPage = document.querySelector('[data-button-confirm="pageMeat"]');
const pageSelectQuanity = document.querySelector("#pageSelectQuanity");
const inputMeatQuanity = document.querySelector("#inputMeatQuanity");
const confirmQuanityPage = document.querySelector('[data-button-confirm=pageQuanity]');
const backBtnOnQuanity = document.querySelector('[data-back-button="pageQuanity"]');
const pageSelectDays = document.querySelector("#pageSelectDays");
const confirmDaysPage = document.querySelector('[data-button-confirm="pageDays"]');
const backBtnOnDays = document.querySelector('[data-back-button="pageDays"]');
const pageTotalResult = document.querySelector("#pageTotalResult");
const resultTotalMeat = document.querySelector("#resultTotalMeat");
const resultTotalDays = document.querySelector("#resultTotalDays");
const resultProtienDaily = document.querySelector("#resultProtienDaily");
const resultMeatDaily = document.querySelector("#resultMeatDaily");
const confirmResultPage = document.querySelector('[data-button-confirm="pageResult"]');
const backBtnOnResult = document.querySelector('[data-back-button="pageResult"]');
// selector for the incrementor 
const incrementerInput = document.querySelector('[data-input-incrementer]');
const incrementerBtnMinus = document.querySelector('[data-incrementer-left]');
const incrementerBtnPlus = document.querySelector('[data-incrementer-right]');
function hidePage(page) {
    page.setAttribute("aria-hidden", "true");
    page.style.display = "none";
}
function showPage(page) {
    page.setAttribute('aria-hidden', 'false');
    page.style.display = 'block';
}
