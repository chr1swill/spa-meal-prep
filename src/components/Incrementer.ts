class Incrementor extends HTMLElement {
  private leftButton!: HTMLElement
  private rightButton!: HTMLElement
  private inputElement!: HTMLInputElement

  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
    this.innerHTML = `
        <div class="incrementor-container">
            <button data-button-incrementor="left">
                <minus-sign></minus-sign>
            </button>
            <button data-button-incrementor="right">
                <plus-sign></plus-sign>
            </button>
            <input type="number" data-input-incrementor value="0" />
        </div>  
    `
  }

  connectedCallback() {
      this.leftButton = this.querySelector('[data-button-incrementor="left"]') as HTMLElement
      this.rightButton = this.querySelector('[data-button-incrementor="right"]') as HTMLElement
      this.inputElement = this.querySelector('[data-input-incrementor]') as HTMLInputElement

      this.leftButton.addEventListener('click', () => {
          this.inputElement.value = (parseInt(this.inputElement.value) - 1).toString()
      }) 

      this.rightButton.addEventListener('click', () => {
          this.inputElement.value = (parseInt(this.inputElement.value) + 1).toString()
      }) 
  }
}

customElements.define('incrementor-element', Incrementor)
