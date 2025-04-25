/**
 * Copyright 2025 TravisMa07
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-screen`
 * 
 * @demo index.html
 * @element portfolio-screen
 */
export class PortfolioScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-screen";
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
        localesPath: new URL("./locales/", import.meta.url).href, 
        locales: ["ar", "es", "hi", "zh"],
      });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      screenNumber: { type: String },
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
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
        
      }
      
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }

      ::slotted(portfolio-screen){
        height: 100vh;
        width: 100vw;
        box-sizing: border-box;
      }


      
     
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <slot></slot>
    `;
  }
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);