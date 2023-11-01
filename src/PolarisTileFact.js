import { LitElement, html, css } from 'lit';

export class PolarisTileFact extends LitElement {
  static get properties() {
    return {
      theme: { type: String },
      bigwords: { type: String },
      details: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .toptext {
        font-size: 36px;
      }

      .bottomtext {
        font-size: 24px;
      }

      .tile {
        margin: auto;
        height: 240px;
        width: 100%;
        padding: 0px;
        word-break: normal;
        text-align: center;
        box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
      }

      .tile[theme="blue"] {
        background-color: #1e407c;
        color: #fff;
      }

      .tile[theme="navy"] {
        background-color: #001e44;
        color: #fff;
      }

      .tile[theme="fade"] {
        background-color: rgb(30,64,124); 
        background: -moz-linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
        background: -webkit-linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
        background: linear-gradient(180deg, rgba(30,64,124,1) 0%, rgba(0,30,68,1) 65%, rgba(0,30,68,1) 100%);
        color: #fff;
      }

      .tile[theme="white"] {
        background-color: #fff;
        color: #001e44;
      }

      .tile[theme="pic"] {
        background-color: gray;
        color: #fff;
      }

    `;
  }

  constructor() {
    super();
    this.theme = 'navy';
    this.bigwords = 'Tile name here';
  }

  getDivider() {
    if(this.details){
      return html`
        ---------------------------------------------------------------
        <div class="bottomtext">${this.details}</div>
      `;
    }
  }

  render() {
    return html`
      <div class="tile" theme="${this.theme}">
        <div class="toptext">${this.bigwords}</div>
        ${this.getDivider()}
      </div>
    `;
  }
}
