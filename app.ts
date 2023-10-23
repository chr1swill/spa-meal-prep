// PAGES
const pageSelectMeat = document.querySelector("#pageSelectMeat") as HTMLElement
const selectTopSirlion = document.querySelector('[data-button-select="top-sirlion"]') as HTMLButtonElement
const selectChickenBreast = document.querySelector('[data-button-select="chicken-breast"]') as HTMLButtonElement
const selectOther = document.querySelector('[data-button-select="other"]') as HTMLButtonElement
const confirmMeatPage = document.querySelector('[data-button-confirm="pageMeat"]') as HTMLButtonElement

const pageSelectQuanity = document.querySelector("#pageSelectQuanity") as HTMLElement
const inputMeatQuanity = document.querySelector("#inputMeatQuanity") as HTMLInputElement
const confirmQuanityPage = document.querySelector('[data-button-confirm=pageQuanity]') as HTMLButtonElement
const backBtnOnQuanity = document.querySelector('[data-back-button="pageQuanity"]') as HTMLButtonElement

const pageSelectDays = document.querySelector("#pageSelectDays") as HTMLElement
const confirmDaysPage = document.querySelector('[data-button-confirm="pageDays"]') as HTMLButtonElement
const backBtnOnDays = document.querySelector('[data-back-button="pageDays"]') as HTMLButtonElement

const pageTotalResult = document.querySelector("#pageTotalResult") as HTMLElement
const resultTotalMeat = document.querySelector("#resultTotalMeat") as HTMLElement
const resultTotalDays = document.querySelector("#resultTotalDays") as HTMLElement
const resultProtienDaily = document.querySelector("#resultProtienDaily") as HTMLElement
const resultMeatDaily = document.querySelector("#resultMeatDaily") as HTMLElement
const confirmResultPage = document.querySelector('[data-button-confirm="pageResult"]') as HTMLButtonElement
const backBtnOnResult = document.querySelector('[data-back-button="pageResult"]') as HTMLButtonElement

// selector for the incrementor 
const incrementerInput = document.querySelector('[data-input-incrementer]') as HTMLInputElement
const incrementerBtnMinus = document.querySelector('[data-incrementer-left]') as HTMLButtonElement
const incrementerBtnPlus = document.querySelector('[data-incrementer-right]') as HTMLButtonElement

function hidePage(page: HTMLElement) {
    page.setAttribute("aria-hidden", "true")
    page.style.display = "none"
}

function showPage(page: HTMLElement) {
    page.setAttribute('aria-hidden', 'false')
    page.style.display = 'block'
}


