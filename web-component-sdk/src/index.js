import {render} from 'winning-sdk';

class SupportBotWebComponent extends HTMLElement {

    constructor() {
        super();
        console.log('constructor')
    }
    static get observedAttributes() {
        return ['theme-options', 'localization-options'];
    }

    connectedCallback() {
        this.renderContent()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.innerHTML = '';
        if (newValue) {
            this.renderContent()
        }
    }
    renderContent(){
        const mountPoint = document.createElement('div');

        const themeOptions = JSON.parse(this.getAttribute('theme-options') ?? '{}');
        const localizationOptions = JSON.parse(this.getAttribute('localization-options') ?? '{}');


        render(this, {themeOptions, localizationOptions, container: mountPoint})
    }
}

customElements.define('support-bot', SupportBotWebComponent);
