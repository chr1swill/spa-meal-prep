class BackArrow extends HTMLElement {
   constructor() {
       super()
   }

   connectedCallback() {
       this.innerHTML =`
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
           <path d="M14 2L4 10L14 19" stroke="green" stroke-width="4" stroke-linecap="round" />
       </svg>
       `;
   }
}

customElements.define('back-arrow', BackArrow)

