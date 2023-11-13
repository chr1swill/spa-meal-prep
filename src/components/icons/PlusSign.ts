class PlusSign extends HTMLElement {
    constructor() {
        super()
    }

    getColor() {
        return 'green' 
    }

    connectedCallback() {
        this.innerHTML =`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 12L22 12" stroke="${this.getColor()}" stroke-width="3" stroke-linecap="round" />
            <path d="M12 22L12 2" stroke="${this.getColor()}" stroke-width="3" stroke-linecap="round" /
        </svg>
        `
    }
}

customElements.define('plus-sign', PlusSign)
