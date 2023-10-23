import { LitElement, html, css } from 'lit';

export class PolarisTileFact extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      xlink: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .tile {
        margin: auto;
        width: 500px;
        padding: 10px;
        text-align: center;
        background-color: #001e44;
        color: #fff;
        box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
      }

    `;
  }

  constructor() {
    super();
    this.title = 'This, a polaris tile';
    this.xlink = 'https://psu.edu/'
  }

  render() {
    return html`
      <div class="tile">
        <slot>${this.title}</slot>
        <a href="${this.xlink}"></a>
      </div>
    `;
  }
}
