class MinusSign extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="4" viewBox="0 0 24 4" fill="none">
            <path d="M2 2L22 2" stroke="green" stroke-width="3" stroke-linecap="round" />
          </svg>
        `
    }
}

customElements.define('minus-sign', MinusSign)
