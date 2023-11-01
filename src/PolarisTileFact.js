import { LitElement, html, css } from 'lit';

export class PolarisTileFact extends LitElement {
  static get properties() {
    return {
      theme: { type: String },
      bigwords: { type: String },
      details: { type: String },
      link: { type: String },
      pic: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .toptext {
        font-size: 36px;
        padding-top: 160px;
        padding-left: 60px;
        padding-right: 60px;
      }

      .bottomtext {
        font-size: 24px;
      }

      .tile {
        margin: auto;
        height: 596px;
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

    `;
  }

  constructor() {
    super();
    this.theme = 'navy';
    this.bigwords = 'Tile name here';
    this.color = '#fff';
  }

  getDivider() {
    if(this.details){
      return html`
        ----------------------------------------------------------------------------------------------------
        <div class="bottomtext">${this.details}</div>
      `;
    }
  }

  render() {
    if(this.link && this.pic) {

      return html`
      <div class="tile-wrap">
        <a class="link" href="${this.link}" style="text-decoration: none;">
          <div class="tile" style="color: #fff; background-image: url(${this.pic}); background-color: rgba(0, 3, 33, 0.5);">
            <div class="toptext">${this.bigwords}</div>
          </div>
        </a>
      </div>
    `;

    } else {

      return html`
      <div class="tile-wrap">
        <div class="tile" theme="${this.theme}">
          <div class="toptext">${this.bigwords}</div>
          ${this.getDivider()}
        </div>
      </div>
      `;

    }
  }
}
