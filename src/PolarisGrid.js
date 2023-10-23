import { LitElement, html, css } from 'lit';

export class PolarisGrid extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        grid-auto-rows: minmax(100px, auto);
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My grid';
  }

  render() {
    return html`<span>${this.title}</span>`;
  }
}
