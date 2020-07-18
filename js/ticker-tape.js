// Intialize a template to hold HTML content
const template = document.createElement("template");
// Set template to hold HTML and CSS
// style the a contianer to animate from left to right
// intialize a HTML container and a tag to and set it to desired github account
template.innerHTML = `
<style>
    .ticker-container {
        animation-name: slide;
        animation-duration: 5000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    a {
        color: black;
        font-size: 45px;
        padding: 10px;
        
    }
    @keyframes slide{
        0%{
            transform: translate3d(0, 0, 0);
        }
        100%{
            transform: translate3d(100%, 0, 0);				
        }
    }
</style>
<div class="ticker-container">
  <a href="https://github.com/ysawiris/CSS-FRAMEWORK">YOUR TEXT GOES HERE<a>
</div>
`;
// Create the Tricker Class
class TickerTape extends HTMLElement {
    constructor() {
        super();
        // Clone the Orginal HTML content
        const tempNode = template.content.cloneNode(true);
        // Open the shadow dom
        this._shadowRoot = this.attachShadow({ mode: "open" });
        // Look for desires HTML tag given in customElements.define()
        this._shadowRoot.appendChild(tempNode);
        // Connect the text given in Orginal HTML to ticker-container's a tag
        // Change query selector if you change the a tag inside ticker container
        this._display = this._shadowRoot.querySelector("a");
        // Set Orginal HTML to NEW HTML
        this._display.innerHTML = this.innerHTML;
    }
}

customElements.define("ticker-tape", TickerTape);
