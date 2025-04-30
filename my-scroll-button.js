/**
 * Copyright 2025 TravisMa07
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import '@haxtheweb/scroll-button/scroll-button.js';
/**
 * `my-scroll-button`
 * 
 * @demo index.html
 * @element my-scroll-button
 */
export class MyScrollButton extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "my-scroll-button";
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
      icon: { type: String },
      label: { type: String },
    };
  }
  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }


      h3 span {
        font-size: var(--portfolio-very-theme-label-font-size, var(--ddd-font-size-s));
      }


      :host {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 9999;
        display: block;
      }
      
      button {
        background-color: var(--ddd-theme-default-inventOrange);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
  
      .buttonInside {
        font-size: 2.5rem;
      }

    `];
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Lit render the HTML
  render() {
    return html`
      <button @click="${this.scrollToTop}">
        <span class="buttonInside">⬆</span>
      </button>
    `;
  }
}
globalThis.customElements.define(MyScrollButton.tag, MyScrollButton);