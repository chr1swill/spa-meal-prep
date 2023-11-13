"use strict";
class BackArrow extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
           <path d="M14 2L4 10L14 19" stroke="green" stroke-width="4" stroke-linecap="round" />
       </svg>
       `;
    }
}
customElements.define('back-arrow', BackArrow);
class MinusSign extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="4" viewBox="0 0 24 4" fill="none">
            <path d="M2 2L22 2" stroke="green" stroke-width="3" stroke-linecap="round" />
          </svg>
        `;
    }
}
customElements.define('minus-sign', MinusSign);
class PlusSign extends HTMLElement {
    constructor() {
        super();
    }
    getColor() {
        return 'green';
    }
    connectedCallback() {
        this.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 12L22 12" stroke="${this.getColor()}" stroke-width="3" stroke-linecap="round" />
            <path d="M12 22L12 2" stroke="${this.getColor()}" stroke-width="3" stroke-linecap="round" /
        </svg>
        `;
    }
}
customElements.define('plus-sign', PlusSign);
