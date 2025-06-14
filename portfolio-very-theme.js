/**
 * Copyright 2025 TravisMa07
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/portfolio-very-theme.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`

    
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
      }
      


      .wrapper {
      display: flex;
      flex-direction: column;
      }

      
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }

      ::slotted(portfolio-screen[screenNumber="1"]) {
        background-color: var(--ddd-theme-default-beaverBlue); 
      }
      ::slotted(portfolio-screen[screenNumber="2"]) {
        background-color: var(--ddd-theme-default-nittanyNavy); 
      }
      ::slotted(portfolio-screen[screenNumber="3"]) {
        background-color: var(--ddd-theme-default-navy40);
      }
      ::slotted(portfolio-screen[screenNumber="4"]) {
        background-color: var(--ddd-theme-default-potentialMidnight); 
      }
      ::slotted(portfolio-screen[screenNumber="5"]) {
        background-color: var(--ddd-theme-default-potential50);
      }

    
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);